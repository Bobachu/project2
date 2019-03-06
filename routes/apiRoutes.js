const db = require("../models");

module.exports = function (app) {

  // <-- GET -->

  // * Sort by main ingredient = req.body.'AJAXCALLNAME'.mainIngredient
  // * Added recipeSearch AJAX call -- 11:25am 3/5/19

  app.get("/api/searches", function (req, res) {
    db.Searches.findAll({
      where: {
        category: req.body.recipeSearch.mainIngredient
      }
    })
      .then(function (dbSearches) {
        res.json(dbSearches);
      });
  });

  // <-- END OF GET -->

  // ======================================================

  // <-- POST -->

  app.post("/api/recipes", function (req, res) {
    console.log(req.body);
    db.Recipes.create(req.body)
      .then(function (dbRecipes) {
        res.json(dbRecipes);
      });
  });

  // <-- END OF POST -->

  // ======================================================

  // <-- DELETE -->

  app.delete("/api/searches/:id", function (req, res) {
    db.Searches.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbSearches) {
        res.json(dbSearches);
      });
  });
};

  // <-- END OF DELETE -->