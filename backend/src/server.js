const express = require("express");
const session = require("express-session");
const cors = require("cors");

// Load .env files
require("dotenv-flow").config();

const config = require("./config/app");
const router = require("./routes");

const app = express();

// Session init
app.use(session(config.session));

// CORS support
app.use(cors(config.cors));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Get system info
app.get("/", (req, res) => {
  req.session.isAuth = true;
  console.log("Session:", req.session);
  console.log("Session ID:", req.session.id);

  res.json({
    data: {
      name: config.name,
      version: config.version,
    },
  });
});

app.use(router);

app.listen(config.local.port, config.local.host, () => {
  console.log("\nServer: ");
  console.log(`    at: ${config.local.address}`);
  console.log(`   pub: ${config.public.address}\n`);
});
