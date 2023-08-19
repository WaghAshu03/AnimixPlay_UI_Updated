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

    if (Object.keys(chk).length !== 0) {
      if (
        chk[0].password === req.body.password ||
        chk[0].password ===
          EncryptorDecryptor({ text: req.body.password, type: "encrypt" })
      ) {
        const Prev = await User.findOneAndUpdate(
          { username: req.body.username },
          {
            $set: {
              profile_image_index: req.body.update.profile_image_index,
              first_name: req.body.update.first_name,
              last_name: req.body.update.last_name,
              email: req.body.update.email,
              WatchList: req.body.update.WatchList,
              RecentlyVisited: req.body.update.RecentlyVisited,
            },
          }
        );
        const New = await User.find({ username: req.body.username });

        res.status(200).json({ New, Prev });
      } else {
        res.status(400).json({
          error: "Incorrect Password",
        });
      }
    } else {
      res.status(400).json({ error: "User does not Exist" });
    }
  } else {
    console.log(req.method);
    res.status(400).json({ error: "Post Only API" });
  }
};

export default connectDb(handler);
