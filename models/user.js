const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    profile_image_index: { type: Number },
    username: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    WatchList: [{ type: String }],
    RecentlyVisited: [{ type: String }],
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("User", UserSchema);
