const { Answer } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(Answer) };

module.exports = controller;
