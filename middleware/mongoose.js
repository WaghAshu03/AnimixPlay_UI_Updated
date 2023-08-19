import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  await mongoose.connect(
    // process.env.MONGO_URI
    // "mongodb://ashu:ashu@ac-qvh5n7b-shard-00-00.oskzizp.mongodb.net:27017,ac-qvh5n7b-shard-00-01.oskzizp.mongodb.net:27017,ac-qvh5n7b-shard-00-02.oskzizp.mongodb.net:27017/?replicaSet=atlas-10qrj5-shard-0&ssl=true&authSource=admin"
    "mongodb+srv://indosoft003:Gfvdx0tleY93ZoVj@cluster0.iqtd0to.mongodb.net/"
  );
  return handler(req, res);
};

export default connectDb;
