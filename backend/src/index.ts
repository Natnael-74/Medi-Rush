import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

mongoose
  .connect(
    (process.env.LOCAL_DB as string) ||
      "mongodb://localhost:27017/med-delivery",
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
const app = express();

app.use(cors());

app.use(express.json());

app.listen(7000, () => {
  console.log(`Server is running on port ${7000}`);
});
