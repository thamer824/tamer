const { StudentAnswer } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(StudentAnswer) };

controller.getByStudentAndQuestion = async (studentId, questionId) => {
  try {
    return await StudentAnswer.findOne({
      where: {
        StudentId: studentId,
        QuestionId: questionId,
      },
    });
  } catch (error) {
    throw new Error("Database error");
  }
};

module.exports = controller;
