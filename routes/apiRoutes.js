const db = require("../models");

module.exports = function(app) {
  // <-- GET -->

  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll().then(function(dbSearches) {
      res.json(dbSearches);
    });
  });

  app.get("/api/searches", function(req, res) {
    db.Searches.findAll().then(function(dbSearches) {
      res.json(dbSearches);
    });
  });

  // <-- END OF GET -->

  // ======================================================

  // <-- POST -->

  app.post("/api/recipes", function(req, res) {
    console.log("+++++++++++++++++++++++++++++");
    var recipe = req.body;
    console.log(req.body);
    db.Recipes.create(recipe).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  app.post("/api/searches", function(req, res) {
    db.Searches.create(req.body).then(function(dbSearches) {
      res.json(dbSearches);
    });
  });

  // <-- END OF POST -->

  // ======================================================

  // <-- DELETE -->

  app.delete("/api/searches/:id", function(req, res) {
    db.Searches.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSearches) {
      res.json(dbSearches);
    });
  });
};

// <-- END OF DELETE -->
