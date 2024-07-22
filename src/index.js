import express from "express"
// import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({
  path: "./.env",
});
const app=express()
const port = process.env.PORT
app.listen(port, () => {
    console.log("port is connected");
});
app.get("/", (req, res) => {
    res.send("Home page")
})