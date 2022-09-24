const { Response, Namespace } = require("./common");
const { mcqController } = require("../controllers");

const ns = new Namespace("/mcq", mcqController);

module.exports = ns.base;
