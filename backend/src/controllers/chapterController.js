const { Chapter } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(Chapter) };

module.exports = controller;
