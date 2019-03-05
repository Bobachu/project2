const db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/searches", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

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


  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
