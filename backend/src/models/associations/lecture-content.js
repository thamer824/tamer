module.exports = (models) => {
  models.Lecture.hasMany(models.Content, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.Content.belongsTo(models.Lecture);
};
