module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Altered table
      "StudentAnswers",
      "AnswerId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Answers",
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
      "StudentAnswers",
      "AnswerId"
    );
  },
};
