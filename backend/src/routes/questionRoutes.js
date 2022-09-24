const { Response, Namespace } = require("./common");
const { questionController } = require("../controllers");

const ns = new Namespace("/question", questionController);

module.exports = ns.base;
