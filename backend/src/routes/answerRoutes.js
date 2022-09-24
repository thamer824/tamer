const { Response, Namespace } = require("./common");
const { answerController } = require("../controllers");

const ns = new Namespace("/answer", answerController);

module.exports = ns.base;
