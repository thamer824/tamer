const { Assessment } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(Assessment) };

module.exports = controller;
