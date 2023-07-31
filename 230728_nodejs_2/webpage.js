const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/public", express.static("./public"));

app.get("/", (req, res) => {
  res.render("webpage");
});

app.get("/domain1", (req, res) => {
  res.render("bug");
});

app.get("/domain2", (req, res) => {
  res.render("change_image");
});

app.get("/domain3", (req, res) => {
  res.render("multiplication_table", { data: 2 });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
