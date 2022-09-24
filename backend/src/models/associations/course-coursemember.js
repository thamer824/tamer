module.exports = (models) => {
  models.Course.hasMany(models.CourseMember, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.CourseMember.belongsTo(models.Course);
};
