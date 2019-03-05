// These are global variables being set here so that we can use them in our URL
var allowedIngredient;
var allowedDiet;
var allowedAllergy;
var recipeSearch;

// When this button is clicked-we take the data from front end, convert to variables, create a yummly url with variable
$("#recipeSearch").on("click", function(event) {
  // This prevents the submit button from refreshing the page when clicked
  event.preventDefault();

  //   The below code is part of the API search parameters. We can modify our search by looking for chicken recipes that are also gluten free-or modify the search for eggplant recipes that are vegan, etc. I have them commented out because I wasn't sure how to implement them currently

  recipeSearch = $("#mainIngredient")
    .val()
    .trim();
  allowedIngredient = $("#allowedIngredient")
    .val()
    .trim();
  allowedDiet = $("#allowedDiet")
    .val()
    .trim();
  allowedAllergy = $("#allowedAllergy")
    .val()
    .trim();

  // Here we construct our URL

  var queryURL =
    "http://api.yummly.com/v1/api/recipes?_app_id=1f483524&_app_key=099b7a16023da9a9f8e9fd29763e0aa0&q=" +
    recipeSearch +
    "&maxResult=5&allowedIngredient[]=" +
    allowedIngredient;

  // Here we send our ajax call to gather the recipes from our API
  $.ajax({
    url: queryURL,
    method: "GET"

    // Then we create a function to pull the matches from our response object/array(?)
  }).then(function(response) {
    console.log(queryURL);

    // we create a variable of recipes which is equal to all of the info in the "matches" array
    const recipes = response.matches;

    // The forEach function loactes each element (in this case recipe) in the array
    recipes.forEach(function(recipe) {
      // Here we console.log all the recipes in the array and list them by name
      console.log(recipe.recipeName);
      console.log("https://www.yummly.com/recipe/" + recipe.id + "#directions");
      console.log(recipe.imageUrlsBySize);

      recipe.ingredients.forEach(function(ingredient) {
        // here we console.log EACH ingredient in the recipe
        console.log("--" + ingredient);
        $("#searchesResults").append(
          $("#recipeTitle").html(recipe.recipeName),
          $("#ingredients").html(ingredient),
          $("#recipeURL").attr("href","https://www.yummly.com/recipe/" + recipe.id + "#directions"),
          $("#recipeURL").html("Recipe Instructions")
          
        );
      });

      // Change this to render the results in the UL on the index.handlebars page

      var newRecipe = $("<li>").append(
        $("<h2>").text(recipe.recipeName).attr("class", "w3-text-brown"),
        $("<a>").text("Recipe Instructions").attr({
          href: "https://www.yummly.com/recipe/" + recipe.id + "#directions",
          target:"_blank"
        })
        // $("<a>").attr("href", "https://www.yummly.com/recipe/" + recipe.id + "#directions"),
        // $("<img>").attr("src", recipe.imageUrlsBySize)
      );
      $("#searchResults").append(newRecipe);

      // $("#searchesResults").append(
      //   $("#recipeTitle").html(recipe.recipeName),
      //   $("#recipeURL").attr("href","https://www.yummly.com/recipe/" + recipe.id + "#directions"),
      //   $("#recipeURL").html("Recipe Instructions"),
      //   $("#images").html(recipe.imageUrlsBySize)

      // );
    });

    // The code below is intended to take the response we get from the code above and append it to our HTML page, replacing our current image.

    $("#searches-div").toggle(false);
    $("#searchesResults").toggle(true);
  });
});

// These are buttons awaiting their function instructions

// This area/button will let the user post the recipe they want to add to our recipes database-

// $addRecipe.on("click", function (event) {
//   // This prevents the submit button from refreshing the page when clicked
//   event.preventDefault();

//   // when the add recipe button is clicked we want to take the recipe info and add it to our mySql database

// });
