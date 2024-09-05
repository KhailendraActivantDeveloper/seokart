import mongoose, { Document, Schema, model } from 'mongoose';

// Define the interface for the Website document
export interface IWebsite extends Document {
  sitemapId?: mongoose.Types.ObjectId; // Optional field
  userId: mongoose.Types.ObjectId;
  url: string;
  status: string;
  statusCode?: number; // Optional field
  title?: string; // Optional field
  metaDescription?: string; // Optional field
  sourceCode?: string; // Optional field
  content?: string; // Optional field
  internalBrokenLinks?: string[]; // Optional field
  externalBrokenLinks?: string[]; // Optional field
  brokenLinksStatus: number; // Optional field
  crawlingDuration: {
    start?: Date; // Optional field
    end?: Date; // Optional field
  };
  brokenLinksCrawlingDuration: {
    start?: Date; // Optional field
    end?: Date; // Optional field
  };
  parts: Array<{
    content: string;
    embedding?: Record<string, any>; // Optional field
    embeddingValues?: any[]; // Optional field
  }>;
}

// Define the Website schema
const webpagesSchema = new Schema<IWebsite>({
  sitemapId: { type: Schema.Types.ObjectId, ref: "Sitemap" },
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  url: { type: String, required: true },
  status: { type: String, default: "pending" },
  statusCode: { type: Number },
  title: { type: String },
  metaDescription: { type: String },
  sourceCode: { type: String },
  content: { type: String },
  internalBrokenLinks: [{ type: String }],
  externalBrokenLinks: [{ type: String }],
  brokenLinksStatus: { type: Number, default: 0 }, // 0 - Pending State,  1 - Success/Done State
  crawlingDuration: {
    start: { type: Date },
    end: { type: Date },
  },
  brokenLinksCrawlingDuration: {
    start: { type: Date },
    end: { type: Date },
  },
  parts: [{
    content: { type: String },
    embedding: { type: Object },
    embeddingValues: { type: Array },
  }]
});

// Create and export the Website model
const Webpages = model<IWebsite>("Webpages", webpagesSchema);

export default Webpages;
