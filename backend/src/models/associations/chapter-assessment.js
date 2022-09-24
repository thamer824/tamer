module.exports = (models) => {
  models.Chapter.hasOne(models.Assessment, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.Assessment.belongsTo(models.Chapter);
};
