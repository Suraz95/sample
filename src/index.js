import express from "express"
// import mongoose from "mongoose"
import connectDB from "./db/index.js";
import dotenv from "dotenv"
dotenv.config({
  path: "./.env",
});
const app=express()
app.get("/", (req, res) => {
    res.send("Home page")
})
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
