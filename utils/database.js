import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Connected successfully!!!");
    return;
  }
};

try {
  await mongoose.connect(process.env.MONGODB_URL, {
    dbName: "share_prompt",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  isConnected = true;
} catch (err) {
  console.log("connected failure!!!", err);
}
