// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Show from "@/models/show";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  let show = await Show.find();
  console.log({ body: req.body });
  res.status(200).json({ show });
};

export default connectDb(handler);
