const express = require("express");
const cors = require("cors");
const getData = require("./scrape");
const helmet = require("helmet");
const rateLImit = require("express-rate-limit");
const compression = require("compression");

const app = express();
app.use(compression());
app.use(helmet());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  const limiter = rateLImit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10 // 5 requests,
  });
  app.use(limiter);
}

app.set("port", process.env.PORT || 5000);

app.get("/api", getData);
app.get("/", getData);

app.listen(app.get("port"), function() {
  console.log(`Node app is running at http://localhost:${app.get("port")}`);
});
