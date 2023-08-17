const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("multiplication_table", { data: 2 });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
