const { Lecture } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(Lecture) };

module.exports = controller;
