module.exports = (models) => {
  models.User.hasOne(models.Course, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    foreignKey: {
      name: "TutorId",
      allowNull: false,
    },
  });

  models.Course.belongsTo(models.User, {
    foreignKey: {
      name: "TutorId",
      allowNull: false,
    },
  });
};
