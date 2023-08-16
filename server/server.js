import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Schema } from "mongoose";

const app = express();
const PORT = 5000;

app.get("/", function (req, res) {
  console.log(5000);
  res.send("OK");
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
