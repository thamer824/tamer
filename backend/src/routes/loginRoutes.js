const { Response, Namespace } = require("./common");
const { loginController } = require("../controllers");
const config = require("../config/app");
const { sanitizeUser } = require("../utils");

const ns = new Namespace("/", loginController, false /* Disable CRUD */);

ns.router.route("/register").post(async (req, res) => {
  try {
    await loginController.register(req.body);
    Response.data(res, "User successfully registered");
  } catch (error) {
    if (error instanceof loginController.ErrorUserWithEmailExists) {
      Response.error(res, "User with email already exists!", 409);
    } else {
      Response.error(res, error);
    }
  }
});

ns.router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, jwtToken } = await loginController.login(email, password);

    res.cookie("jwt", jwtToken, { httpOnly: true, maxAge: config.jwt.maxAge });

    Response.data(res, {
      user: sanitizeUser(user),
      token: jwtToken,
    });
  } catch (error) {
    if (error instanceof loginController.ErrorUserNotFound) {
      Response.error(res, "Email or password does not match!", 400);
    } else if (error instanceof loginController.ErrorUserWrongPassword) {
      Response.error(res, "Email or password does not match!", 400);
    } else {
      Response.error(res, error);
    }
  }
});

ns.router.route("/logout").get(async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
});

module.exports = ns.base;
