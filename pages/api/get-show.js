// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Show from "@/models/show";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let show = await Show.find({ showId: req.body.showId });

    res.status(200).json({ show });
  } else {
    console.log(req.method);
    res.status(400).json({ error: "Post Only API" });
  }
};

export default connectDb(handler);
