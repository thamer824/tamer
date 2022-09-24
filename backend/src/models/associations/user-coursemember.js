module.exports = (models) => {
  models.User.hasMany(models.CourseMember, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.CourseMember.belongsTo(models.User);
};
