module.exports = function(sequelize, DataTypes) {
  const Recipes = sequelize.define("Recipes", {
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
    allowedDiet: {
      type: DataTypes.STRING,
      allowNull: true
    },
    allowedAllergy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return Recipes;
};
