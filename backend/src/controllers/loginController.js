const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User, Role } = require("../models");
const config = require("../config/app");

const controller = {};

controller.ErrorUserWithEmailExists = class extends Error {};
controller.ErrorUserNotFound = class extends Error {};
controller.ErrorUserWrongPassword = class extends Error {};

controller.register = async (user) => {
  const { email, password, firstName, lastName } = user;

  const hash = await bcrypt.hash(password, 12);

  let alreadyExistsUser;
  try {
    alreadyExistsUser = await User.findOne({ where: { email } });
  } catch (error) {
    console.error(error);
    throw new Error("Database error");
  }

  if (alreadyExistsUser) {
    throw new controller.ErrorUserWithEmailExists();
  }

  try {
    return await User.create({
      email,
      password: hash,
      firstName,
      lastName,
      status: "EMAIL_VALIDATION",
    });
  } catch (error) {
    console.error(error);
    throw new Error("Database error");
  }
};

controller.login = async (email, password) => {
  let user;

  try {
    // Get user with his roles
    user = await User.findOne({ where: { email }, include: [Role] });
  } catch (error) {
    console.error(error);
    throw new Error("Database error");
  }

  if (!user) {
    throw new controller.ErrorUserNotFound();
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new controller.ErrorUserWrongPassword();
  }

  const _user = { id: user.id, email: user.email };
  const jwtToken = jwt.sign(_user, config.jwt.secret, {
    expiresIn: config.jwt.maxAge,
  });

  return { user, jwtToken };
};

module.exports = controller;
