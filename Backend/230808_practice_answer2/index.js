// const express = require("express");
import express from "express";
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static(__dirname + "/static"));

//router
// const userRouter = require("./routes/user");
import userRouter from "./routes/user.js";
app.use("/user", userRouter);

//404
app.use("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
