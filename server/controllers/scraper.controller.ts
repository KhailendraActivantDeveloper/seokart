import axios, { AxiosRequestConfig } from "axios";
const cheerio = require("cheerio");
import { Request, Response } from "express";
import Client from "../models/client.model";
import Sitemap from "../models/sitemap.models";
import Webpages from "../models/webpages.model";
import { CatchAsyncError } from "../middleware/error";

interface ScraperControllerInterface {
  scrape: any;
}

const clientStatus: any = {};

async function checkBrokenLinks(links: string[]): Promise<string[]> {
  const brokenLinks: string[] = [];

  for (const link of links) {
    try {
      const response = await axios.head(link);
      if (response.status >= 404) {
        brokenLinks.push(link);
      }
    } catch (error: any) {
      if (error.response?.status >= 404) {
        brokenLinks.push(link);
      }
    }
  }

  return brokenLinks;
}

const nestedSitemapCrawling = async (
  sitemapObj: any,
  client: any,
  req: any
) => {
  const userId = req.user?._id;
  try {
    let config: AxiosRequestConfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: sitemapObj?.url,
      headers: {},
    };

    const sitemapResponse = await axios.request(config);
    const $ = cheerio.load(sitemapResponse.data);

    const webPageLocs = $("loc:not(sitemap loc)")
      .map((index: number, element: any) => $(element).text())
      .get();

    const sitemapLocs = $("sitemap loc")
      .map((index: number, element: any) => $(element).text())
      .get();

    if (webPageLocs.length) {
      await insertOrUpdateSitemapRecords(
        webPageLocs,
        userId,
        sitemapObj._id,
        1
      );
      // req?.io.to('user' + userId).emit('web-pages-added');
      // webPageCrawling(client, userId, req);
    }

    if (sitemapLocs.length) {
      await insertOrUpdateSitemapRecords(
        sitemapLocs,
        userId,
        sitemapObj._id,
        0
      );
    }
  } catch (error) {
    console.log("Error in scrapping " + sitemapObj.url);
    console.log(error);
  }
};

async function webPageCrawling(webLinkObj: any, client: any, req: any) {
  const userId = req.user?._id;

  let webpageObj: any = new Webpages({
    userId,
    url: webLinkObj?.url,
    sitemapId: webLinkObj?.parentSitemapIds[0],
    crawlingDuration: { start: new Date(), end: new Date() },
  });
  try {
    let config: AxiosRequestConfig = {
      method: "get",
      maxBodyLength: Infinity,
      url: webLinkObj?.url,
      headers: {},
    };

    let sitemapResponse = await axios.request(config);
    webpageObj.status = sitemapResponse.statusText;
    webpageObj.statusCode = sitemapResponse.status;
    await webpageObj.save();
    // 2024-08-29T07:03:20.258+00:00
    // 2024-08-29T07:03:23.270+00:00

    const $ = cheerio.load(sitemapResponse.data);
    // new function start
    const allowedTags = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "ul",
      "ol",
      "li",
      "dl",
      "dt",
      "dd",
      "a",
    ];

    const title = $("title").text();
    const metaDescription = $('meta[name="description"]').attr("content");

    webpageObj.title = title;
    webpageObj.metaDescription = metaDescription;
    webpageObj.sourceCode = $.html().replace(/\s+/g, " ").trim();
    await webpageObj.save();

    $("br, hr").remove(); // or replace with a suitable representation
    // Remove style, script tags
    $("style, script").remove();
    // Remove comments
    $("*")
      .contents()
      .filter(function (_: any, element: any) {
        return element.nodeType === 8; // nodeType 8 is for comments
      })
      .remove();
    // Handle other singular tags appropriately
    $("img, input").remove(); // or handle differently based on your requirements

    function replaceNonAllowedTags(elementTag: string) {
      $(elementTag)
        .contents()
        .each(function (_: any, element: any) {
          if (element.nodeType === 1) {
            replaceNonAllowedTags(element);
            // Check if the current node is not in the allowed tag list
            if (!allowedTags.includes(element.name)) {
              // Check if there is exactly 1 immediate child node of type 1
              const childNodes = $(element)
                .children()
                .filter(function () {
                  return element.nodeType === 1;
                });

              if (childNodes.length === 1) {
                // Replace the outer node with its inner HTML
                const innerHtml = $(element).html() || "";
                $(element).replaceWith(innerHtml);
              }
            }
          }
        });
    }
    replaceNonAllowedTags("body");

    function removeEmptyElements(elementTag: string) {
      $(elementTag)
        .contents()
        .each(function (_: any, element: any) {
          if (element.nodeType === 1) {
            removeEmptyElements(element);
            // if ($(this).is(":empty")) {
            if ($(element).is(":empty") || /^\s*$/.test($(element).text())) {
              $(element).remove();
            }
          }
        });
    }
    removeEmptyElements("body");

    $("*").each(function (_: any, element: any) {
      if ($(element).is("p, h1, h2, h3, h4, h5, h6, li")) {
        // Preserve anchor tags while trimming text
        $(element)
          .contents()
          .filter(function () {
            return element.nodeType === 3; // Filter for text nodes
          })
          .each(function () {
            element.nodeValue = element.nodeValue.trim(); // Trim text content
          });
      }
    });

    // Remove unused attributes
    $("*").each(function (_: any, element: any) {
      const allowedAttributes = ["src", "href"];

      // Get all attributes of the current element
      const attributes = element.attribs;

      // Check each attribute
      for (const attr in attributes) {
        if (attributes[attr] && !allowedAttributes.includes(attr)) {
          // Remove the non-allowed attributes
          delete attributes[attr];
        }
      }
    });

    const content = $("body").html().replace(/\s+/g, " ").trim();
    webpageObj.content = content;

    function splitContent(content: string, maxLength: number) {
      const parts = [];
      let start = 0;
      while (start < content.length) {
        const part = content.substr(start, maxLength);
        parts.push({ content: part });
        start += maxLength;
      }
      return parts;
    }

    const maxLength = 1200;
    const parts = splitContent(content, maxLength);
    webpageObj.parts = parts;
    webpageObj.crawlingDuration.end = new Date();
    await webpageObj.save();

    // console.log("content>>>>>>>>>>>>>>>",{content});
  } catch (error: any) {
    webpageObj.status = 0;
    webpageObj.statusCode = error.status;
    await webpageObj.save();
    console.log("Error in scrapping " + webLinkObj.url);
    console.log(error.status);
  }
}
async function insertOrUpdateSitemapRecords(
  urls: string[],
  userId: string,
  sitemapId: any,
  urlType: any
) {
  const insertedRecords = [];
  const updatedRecords = [];
  const duplicateRecords = [];

  const existingRecords = await Sitemap.find({ url: { $in: urls }, userId });

  for (const url of urls) {
    const existingRecord = existingRecords.find((record) => record.url === url);

    if (existingRecord) {
      if (!existingRecord.parentSitemapIds.includes(sitemapId)) {
        existingRecord.parentSitemapIds.push(sitemapId);
        updatedRecords.push(existingRecord);
      } else {
        duplicateRecords.push(existingRecord._id);
      }
    } else {
      const sitemap = new Sitemap({
        userId,
        url,
        urlType,
        parentSitemapIds: [sitemapId],
      });
      await sitemap.save();
      insertedRecords.push(sitemap);
    }
  }
  // Save changes to existing records concurrently
  await Promise.all(existingRecords.map((record) => record.save()));
  return { insertedRecords, updatedRecords, duplicateRecords };
}

async function webLinkBrokCheckCrawling(webLinkObj: any) {
  webLinkObj.brokenLinksCrawlingDuration.start = new Date();
  await webLinkObj.save();

  const $ = cheerio.load(webLinkObj.content);
  const baseUrl = new URL(webLinkObj.url).origin;
  const anchorTags = $("a");
  const newArr = [];

  for (let i = 0; i < anchorTags.length; i++) {
    let link = $(anchorTags[i]).attr("href");

    if (link) {
      newArr.push(link);
    }
  }

  const internalLinks = [...new Set(newArr.filter((url) => url.startsWith(baseUrl) || (typeof url === "string" && !url.startsWith("mailto") && !url.startsWith("tel") && !url.startsWith("javascript:") && !url.startsWith("http") && !url.startsWith("httos") && !url.startsWith("www") && !url.startsWith("#") && url.length !== 1))),];
  const externalLinks = [ ...new Set( newArr.filter( (url) =>  typeof url === "string" && !url.startsWith(baseUrl) && (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("www")) && !url.startsWith("mailto") && !url.startsWith("tel") && !url.startsWith("javascript:") && url.length > 1)),];
  const internalFullUrls = internalLinks.map(url => new URL(url, baseUrl).href);

  let internalBrokLinks: string[] = await checkBrokenLinks(internalFullUrls);
  let externalBrokLinks: string[] = await checkBrokenLinks(externalLinks);

  webLinkObj.internalBrokenLinks = internalBrokLinks;
  webLinkObj.externalBrokenLinks = externalBrokLinks;
  webLinkObj.brokenLinksCrawlingDuration.end = new Date();
  await webLinkObj.save();
}

const ScraperController: ScraperControllerInterface = {
  scrape: CatchAsyncError(
    async (req: Request, res: Response): Promise<void> => {
      try {
        const { sitemap } = req.body;
        const userId = req.user?._id;
  
        const client = await Client.findOne({ userId });
        if (
          client &&
          client.sitemapScrappingStatus + client?.webPageScrappingStatus == 0
        ) {
          const existingSitemap = await Sitemap.findOne({ userId, url: sitemap });
          if (existingSitemap) {
            res
              .status(200)
              .json({ status_code: 200, message: "Sitemap already added." });
          } else {
            let sitemapObj: any = await Sitemap.create({ userId, url: sitemap });
            res
              .status(201)
              .json({ status_code: 200, message: "Scraping process initiated." });
            // console.log(sitemapObj);
            client.sitemapScrappingStatus = 1;
            await client.save();
  
            let sitemapObjs = await Sitemap.find({ userId, status: 0, urlType: 0 }).limit(1);
  
            while (sitemapObjs.length > 0) {
              // Process all fetched sitemaps concurrently
              await Promise.all(
                sitemapObjs.map(async (sitemapObj) => {
                  await nestedSitemapCrawling(sitemapObj, client, req);
                  sitemapObj.status = 1;
                  await sitemapObj.save();
                })
              );
  
              // Fetch the next batch of sitemap objects
              sitemapObjs = await Sitemap.find({ userId, status: 0, urlType: 0 }).limit(40);
            }
            client.sitemapScrappingStatus = 0;
            client.webPageScrappingStatus = 1;
            await client.save();
  
            // For website link crowling creat new loop
            let webLinkObjs = await Sitemap.find({ userId, status: 0, urlType: 1 }).limit(40);
            client.webPageMappingCount += webLinkObjs.length?? 0;
            while (webLinkObjs?.length > 0) {
              await Promise.all(
                webLinkObjs.map(async (webLinkObj) => {
                  await webPageCrawling(webLinkObj, client, req);
                  webLinkObj.status = 1;
                  await webLinkObj.save();
                })
              )
              webLinkObjs = await Sitemap.find({ userId, status: 0, urlType: 1 }).limit(40);
              client.webPageMappingCount += webLinkObjs.length?? 0;
            }
  
            let webLinkBrokCheckObjs = await Webpages.find({
              userId,
              statusCode: 200,
              brokenLinksStatus: 0
            }).limit(40);
  
            while (webLinkBrokCheckObjs.length > 0) {
              await Promise.all(
                webLinkBrokCheckObjs.map(async (webLinkBrokCheckObj) => {
                  await webLinkBrokCheckCrawling(webLinkBrokCheckObj);
                  webLinkBrokCheckObj.brokenLinksStatus = 1;
                  await webLinkBrokCheckObj.save();
                })
              );
  
              webLinkBrokCheckObjs = await Webpages.find({
                userId,
                statusCode: 200,
                brokenLinksStatus: 0
              }).limit(40);
            }
  
            client.webPageScrappingStatus = 0;
            await client.save();
          }
        } else if (client && client.sitemapScrappingStatus == 1) {
          res.status(200).json({
            status_code: 200,
            message: "Sitemap scrapping already in progress",
          });
        } else if (client && client.webPageScrappingStatus == 1) {
          res.status(200).json({
            status_code: 200,
            message: "Web-page scrapping already in progress",
          });
        }
      } catch (error) {
        console.error(error);
        // Emit socket event: Scraping failed
        req?.io.emit("scrapingFailed", { message: "Scraping process failed." });
      }
    },
  )
};

export default ScraperController;
