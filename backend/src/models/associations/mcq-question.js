module.exports = (models) => {
  models.Mcq.hasMany(models.Question, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.Question.belongsTo(models.Mcq);
};
