module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Altered table
      "Mcqs",
      "AssessmentId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Assessments",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      // Altered table
      "Mcqs",
      "AssessmentId"
    );
  },
};
