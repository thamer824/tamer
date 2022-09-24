const { Response, Namespace } = require("./common");
const { userController } = require("../controllers");
const { sanitizeUser } = require("../utils");

const ns = new Namespace("/user", userController, false /* Disable CRUD */);

// Get list of users
ns.router.route("/").get(async (req, res) => {
  try {
    const users = await userController.getList();
    Response.data(res, users.map(sanitizeUser));
  } catch (error) {
    Response.error(res, error);
  }
});

// Get user by id
ns.router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userController.getById(id);

    Response.data(res, sanitizeUser(user));
  } catch (error) {
    Response.error(res, error);
  }
});

// Update user
ns.router.route("/:id").put(async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userController.updateById(id, req.body);

    Response.data(res, user);
  } catch (error) {
    Response.error(res, error);
  }
});

// Delete user
ns.router.route("/:id").delete(async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userController.deleteById(id);

    Response.data(res, user);
  } catch (error) {
    Response.error(res, error);
  }
});

module.exports = ns.base;
