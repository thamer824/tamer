const { Response, Namespace } = require("./common");
const { lectureController } = require("../controllers");

const ns = new Namespace("/lecture", lectureController);

module.exports = ns.base;
