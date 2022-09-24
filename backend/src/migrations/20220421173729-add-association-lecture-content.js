module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Altered table
      "Contents",
      "LectureId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Lectures",
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
      "Contents",
      "LectureId"
    );
  },
};
