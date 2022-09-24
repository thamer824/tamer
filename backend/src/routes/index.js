const fs = require("fs");
const path = require("path");
const express = require("express");

const basename = path.basename(__filename);
const router = express.Router();

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-9) === "Routes.js"
    );
  })
  .forEach((file) => {
    const routes = require(path.join(__dirname, file));
    router.use(routes);
  });

module.exports = router;
