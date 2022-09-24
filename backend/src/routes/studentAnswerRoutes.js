const { Response, Namespace } = require("./common");
const { studentAnswerController } = require("../controllers");

const ns = new Namespace("/student-answer", studentAnswerController);

module.exports = ns.base;
