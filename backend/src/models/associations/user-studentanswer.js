module.exports = (models) => {
  models.User.hasMany(models.StudentAnswer, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });

  models.StudentAnswer.belongsTo(models.User);
};
