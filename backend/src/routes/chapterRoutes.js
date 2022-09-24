const { Response, Namespace } = require("./common");
const { chapterController } = require("../controllers");

const ns = new Namespace("/chapter", chapterController);

module.exports = ns.base;
