module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Altered table
      "StudentAnswers",
      "UserId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
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
      "UserId"
    );
  },
};
