module.exports = function (sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    mainIngredient: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    secondaryIngredient: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  return Recipes;
};
