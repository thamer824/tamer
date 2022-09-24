const { User, Role } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(User) };

// Get list of users with their roles
controller.getList = async () => {
  // See https://sequelize.org/docs/v6/core-concepts/model-querying-finders

  try {
    return await User.findAll({ include: Role });
  } catch (error) {
    console.error(error);
    throw new Error("Database error");
  }
};

// Get user with his roles
controller.getById = async (id) => {
  // See https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findbypk
  // See https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading

  try {
    return await User.findByPk(id, { include: Role });
  } catch (error) {
    console.error(error);
    throw new Error("Database error");
  }
};

module.exports = controller;
