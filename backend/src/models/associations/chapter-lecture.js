module.exports = (models) => {
  models.Chapter.hasMany(models.Lecture, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.Lecture.belongsTo(models.Chapter);
};
