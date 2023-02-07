module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    colour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeOfShoe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designTemplates: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Product;
};
