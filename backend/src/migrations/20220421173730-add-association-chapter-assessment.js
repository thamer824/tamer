module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Altered table
      "Assessments",
      "ChapterId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Chapters",
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
      "Assessments",
      "ChapterId"
    );
  },
};
