import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(cors());

app.use(express.json());

app.listen(7000, () => {
  console.log(`Server is running on port ${7000}`);
});
