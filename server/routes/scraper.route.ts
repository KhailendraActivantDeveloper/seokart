import express from 'express'
import { authorizeRoles, isAutheticated } from '../middleware/auth';
import ScraperController from '../controllers/scraper.controller';
const scrapeRouter = express.Router();

scrapeRouter.post('/scraper-sitmap', isAutheticated, ScraperController.scrape);



export default scrapeRouter;