const mongoose = require("mongoose");

const ShowSchema = new mongoose.Schema(
  {
    showId: { type: String, required: true },
    landscapePoster: { type: String, required: true },
    poster: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    Languages: [String],
    aired: { type: String, required: true },
    avgDuration: { type: String },
    MAL_Score: { type: Number },
    Tags: [String],
    studios: [String],
    Producers: [String],
    episodes: [String],
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Show", ShowSchema);
