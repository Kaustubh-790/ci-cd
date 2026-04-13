import express from "express";
import sum from "./sum.js";
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.json({
    message: "root",
  });
});

app.get("/sum/:a/:b", (req, res) => {
  let { a, b } = req.params;
  res.json({
    message: sum(parseInt(a), parseInt(b)),
  });
});
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
