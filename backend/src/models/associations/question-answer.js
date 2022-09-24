module.exports = (models) => {
  models.Question.hasMany(models.Answer, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.Answer.belongsTo(models.Question);
};
