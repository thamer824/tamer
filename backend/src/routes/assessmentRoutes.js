const { Response, Namespace } = require("./common");
const { assessmentController } = require("../controllers");

const ns = new Namespace("/assessment", assessmentController);

module.exports = ns.base;
