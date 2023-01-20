import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import imageRoute from "./routes/nature.js";

dotenv.config();

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO).then(() => {
  console.log("DB is Connected");
});

app.use(express.json());
app.use(cors());
app.use("/api/v1/gallery", imageRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is Started in PORT ${port}`);
});
