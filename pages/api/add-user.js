// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "@/models/user";
import connectDb from "@/middleware/mongoose";
import crypto from "crypto";

const EncryptorDecryptor = ({ type, text }) => {
  if (type === "encrypt") {
    const hash = crypto.createHash("sha256").update(text).digest("hex");
    return hash;
  } else if (type === "decrypt") {
    // Decryption not possible with SHA-256
    throw new Error("Decryption not possible with SHA-256");
  } else {
    throw new Error("Invalid type parameter");
  }
};

const handler = async (req, res) => {
  if (req.method == "POST") {
    const chk = await User.find({ username: req.body.username });

    if (Object.keys(chk).length === 0) {
      let u = new User({
        profile_image_index: req.body.profile_image_index,
        username: req.body.username,
        password: EncryptorDecryptor({
          type: "encrypt",
          text: req.body.password,
        }),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        WatchList: req.body.WatchList,
        RecentlyVisited: req.body.RecentlyVisited,
      });
      console.log(u);

      await u.save();

      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: "Username already in use" });
    }
  } else {
    console.log(req.method);
    res.status(400).json({ error: "Post Only API" });
  }
};

export default connectDb(handler);
