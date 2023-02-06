module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    rating: {
      type: DataTypes.INTEGER,
    },
  });

  return Review;
};
