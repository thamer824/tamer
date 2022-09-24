module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Altered table
      "Answers",
      "QuestionId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Questions",
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
      "Answers",
      "QuestionId"
    );
  },
};
