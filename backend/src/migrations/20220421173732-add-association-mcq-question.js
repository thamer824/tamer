module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      // Altered table
      "Questions",
      "McqId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Mcqs",
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
      "Questions",
      "McqId"
    );
  },
};
