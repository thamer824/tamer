// Remove password from user
function sanitizeUser(user) {
  const sanitizedUser = {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    status: user.status,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };

  if (user.Roles) {
    sanitizedUser.Roles = user.Roles;
  }

  return sanitizedUser;
}

module.exports = {
  sanitizeUser,
};
