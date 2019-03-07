module.exports = function(sequelize, DataTypes) {
  const Searches = sequelize.define("Searches", {
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
    diet: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    },
    allergy: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {}
    },
    yummlySearch: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {}
    }
  });

  return Searches;
};
