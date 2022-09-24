const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

const controllers = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-13) === "Controller.js"
    );
  })
  .forEach((file) => {
    const controller = require(path.join(__dirname, file));
    const name = file.slice(0, file.length - 3);
    controllers[name] = controller;
  });

module.exports = controllers;
