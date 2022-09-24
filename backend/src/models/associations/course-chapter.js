module.exports = (models) => {
  models.Course.hasMany(models.Chapter, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.Chapter.belongsTo(models.Course);
};
