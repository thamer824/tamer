module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Altered table
      "Lectures",
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
      "Lectures",
      "ChapterId"
    );
  },
};
