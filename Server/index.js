import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import PostRouter from "./routes/PostRoute.js";
import GenerateAIImageRouter from "./routes/GenerateImageRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateAIImageRouter);

//error handle
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Some thing went wrong !";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello Paul dev!",
  });
});

//connecting to mongo db
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error("Failed to connect !");
      console.error(err);
    });
};

const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, console.log(`Server started on port 8080`));
  } catch (error) {
    console.log(err);
  }
};

startServer();
