const { Mcq } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(Mcq) };

module.exports = controller;
