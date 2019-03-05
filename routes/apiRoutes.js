const db = require("../models");

module.exports = function (app) {

  // <-- REFERENCE USED FOR GET -->

  // // Get route for returning posts of a specific category
  // app.get("/api/posts/category/:category", function(req, res) {
  //   db.Post.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // * Sort by main ingredient = req.body.'AJAXCALLNAME'.mainIngredient
  // ! Need AJAX Call name for GET Request !
  // Get all examples
  app.get("/api/searches", function (req, res) {
    db.Searches.findAll({
      where: {
        category: req.body.AJAXCALL.mainIngredient
      }
    })
      .then(function (dbSearches) {
        res.json(dbSearches);
      });
  });

  // <-- END OF GET -->

  // ======================================================

  // <-- REFERENCE USED FOR POST -->

  //   Routes for recipe add db (apiroutes)
  //    * post  
  //    * Send main ingredient
  //    * Send secondary ingredient
  //    * Send instructions
  //    * Send full ingredients list

  // app.post("/api/posts", function(req, res) {
  //   console.log(req.body);
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // Create a new example
  app.post("/api/recipes", function (req, res) {
    db.Recipes.create(req.body)({
      title: req.body.title,
      mainIngredient: req.body.mainIngredient,
      secondaryIngredient: req.body.secondaryIngredient,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients
    })
      .then(function (dbRecipes) {
        res.json(dbRecipes);
      });
  });

  // <-- END OF POST -->

  // ======================================================

  // <-- REFERENCE USED FOR DELETE -->

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // Delete an example by id
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