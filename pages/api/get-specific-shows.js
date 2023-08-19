// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Show from "@/models/show";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let shows = [];
    for (let index = 0; index < req.body.length; index++) {
      let show = await Show.find({ showId: req.body[index] });
      shows.push(show[0]);
    }

    res.status(200).json(shows);
  } else {
    console.log(req.method);
    res.status(400).json({ error: "Post Only API" });
  }
};

export default connectDb(handler);
