const { Question } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(Question) };

module.exports = controller;
