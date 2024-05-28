import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const num = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {numLetters: num});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
