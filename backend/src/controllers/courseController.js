const { Op } = require("sequelize");

const { Course, CourseMember } = require("../models");
const { genCrud } = require("./common");

const controller = { ...genCrud(Course) };

controller.search = async (title = "", description = "") => {
  try {
    let where;

    const searchByTitle = {
      title: {
        [Op.iLike]: "%" + title + "%",
      },
    };

    const searchByDescription = {
      description: {
        [Op.iLike]: "%" + description + "%",
      },
    };

    if (title && description) {
      where = {
        [Op.and]: [searchByTitle, searchByDescription],
      };
    } else if (title) {
      where = searchByTitle;
    } else if (description) {
      where = searchByDescription;
    }

    return await Course.findAll({ where });
  } catch (error) {
    console.error(error);
    throw new Error("Database error");
  }
};

controller.addMember = async (user) => {
  throw new Error("TODO");
};

module.exports = controller;
