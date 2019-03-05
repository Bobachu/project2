module.exports = function (sequelize, DataTypes) {
    var Searches = sequelize.define("Searches", {
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
<<<<<<< HEAD
        },
        spices: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        diet: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        allergy: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        yummlySearch: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
=======
        }
>>>>>>> ce0bfeeb93b1f911a55d55e05dd47cc326e04c88
    });

    return Searches;
};