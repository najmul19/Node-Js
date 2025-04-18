const express = require("express");
const app = express();
const port = 5000;
app.get("/", (req, res) => {
  res.send("hello from my first ever server");
});
app.get("/data", (req, res) => {
  res.send("more data comming soon");
});
app.listen(port, () => {
  console.log(`my first server si running on port: ${port}`);
});
