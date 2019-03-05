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
        }
    });

    return Searches;
};