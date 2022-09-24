module.exports = (models) => {
  models.User.hasMany(models.Role, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.Role.belongsTo(models.User);
};
