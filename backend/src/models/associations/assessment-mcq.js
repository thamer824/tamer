module.exports = (models) => {
  models.Assessment.hasOne(models.Mcq, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.Mcq.belongsTo(models.Assessment);
};
