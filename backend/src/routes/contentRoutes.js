const { Response, Namespace } = require("./common");
const { contentController } = require("../controllers");

const ns = new Namespace("/content", contentController);

module.exports = ns.base;
