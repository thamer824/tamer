const { Content } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(Content) };

module.exports = controller;
