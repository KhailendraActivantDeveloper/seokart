import mongoose, { Document, Schema, Model } from 'mongoose';

// Define an interface representing a document in MongoDB.
interface ISitemap extends Document {
  url: string;
  userId: mongoose.Schema.Types.ObjectId;
  status: number; // 0-Pending, 1-Success
  urlType: number; // 0-Pending, 1-Success
  parentSitemapIds: mongoose.Schema.Types.ObjectId[];
}

// Create a schema corresponding to the document interface.
const sitemapSchema: Schema<ISitemap> = new Schema(
  {
    url: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    status: { type: Number, default: 0 }, // 0-Pending, 1-Success
    urlType: { type: Number, default: 0 }, // 0-sitemap, 1-url
    parentSitemapIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sitemap' }],
  },
  { timestamps: true }
);

// Create a model.
const Sitemap: Model<ISitemap> = mongoose.model<ISitemap>('Sitemap', sitemapSchema);

export default Sitemap;

