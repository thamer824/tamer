module.exports = (models) => {
  models.Answer.hasMany(models.StudentAnswer, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.StudentAnswer.belongsTo(models.Answer);
};
