function genCrud(model) {
  return {
    async create(data) {
      // See https://sequelize.org/docs/v6/core-concepts/model-instances/#a-very-useful-shortcut-the-create-method

      try {
        return await model.create(data);
      } catch (error) {
        console.error(error);
        throw new Error("Database error");
      }
    },

    async getList() {
      // See https://sequelize.org/docs/v6/core-concepts/model-querying-basics

      try {
        return await model.findAll();
      } catch (error) {
        console.error(error);
        throw new Error("Database error");
      }
    },

    async getById(id) {
      // See https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findbypk

      try {
        return await model.findByPk(id);
      } catch (error) {
        console.error(error);
        throw new Error("Database error");
      }
    },

    async updateById(id, data) {
      // See https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-update-queries

      try {
        const model = await model.findByPk(id);
        return await model.update(data);
      } catch (error) {
        console.error(error);
        throw new Error("Database error");
      }
    },

    async deleteById(id) {
      // See https://sequelize.org/docs/v6/core-concepts/paranoid/#deleting
      // See https://sequelize.org/docs/v6/core-concepts/model-instances/#deleting-an-instance

      try {
        return await model.destroy({
          where: { id },
          force: true, // Hard-deletion
        });
      } catch (error) {
        console.error(error);
        throw new Error("Database error");
      }
    },
  };
}

module.exports = {
  //
  genCrud,
};
