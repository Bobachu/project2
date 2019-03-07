module.exports = function(sequelize, DataTypes) {
  const Recipes = sequelize.define("Recipes", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
      // // validate: {
      //   len: [1]
      // }
    },
    mainIngredient: {
      type: DataTypes.STRING,
      allowNull: false
      // validate: {
      //   len: [1]
      // }
    },
    secondaryIngredient: {
      type: DataTypes.STRING,
      allowNull: false
      // validate: {
      //   len: [1]
      // }
    },
<<<<<<< HEAD
    allowedAllergy: {
=======
    allowedDiet: {
>>>>>>> d160c08d322e113215ed1f9ec8d44b4502fc05b4
      type: DataTypes.STRING,
      allowNull: true
      // validate: {}
    },
<<<<<<< HEAD
    allowedDiet: {
=======
    allowedAllergy: {
>>>>>>> d160c08d322e113215ed1f9ec8d44b4502fc05b4
      type: DataTypes.STRING,
      allowNull: true
      // validate: {}
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false
      // len: [1]
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false
      // len: [1]
    }
  });

  return Recipes;
};
