import mongoose, { Document, Schema, Model } from "mongoose";

interface IClient extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  credits: {
    total: number;
    used: number;
  };
  sitemapScrappingStatus: number;
  webPageScrappingStatus: number;
  webPageMappingCount: number;
}

// Create a schema corresponding to the document interface.
const clientSchema: Schema<IClient> = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  credits: {
    total: { type: Number, default: 10000 },
    used: { type: Number, default: 0 },
  },
  sitemapScrappingStatus: { type: Number, default: 0 }, // 0-NoCurrentScrapping, 1-RunningScrapping
  webPageScrappingStatus: { type: Number, default: 0 }, // 0-NoCurrentScrapping, 1-RunningScrapping
  webPageMappingCount: { type: Number, default: 0 },
},
{ timestamps: true });

// Create a model.
const Client: Model<IClient> = mongoose.model<IClient>("Client", clientSchema);

export default Client;
