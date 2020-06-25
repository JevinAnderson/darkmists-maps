const express = require("express");
const morgan = require("morgan");
const path = require("path");
const open = require("open");

const app = express();
app.use(morgan("dev"));

const root = path.resolve(__dirname, "docs");
app.use(express.static(root));

const port = 1999;
app.listen(port, (error) => {
  if (error) {
    console.log("Application startup error", error);
    process.exit(-1);
  }
  const url = `http://127.0.0.1:${port}`;
  console.log(`Application started. Go to ${url} in your browser.`);
  open(url);
});
