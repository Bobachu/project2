
// var allowedIngredient;
// var allowedDiet;
// var allowedAllergy;

// $recipeSearch.on("click", function (event) {
  // whent his button is clicked-take data from front end, convert to variables, create a yummly url with variable 
  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  // event.preventDefault();

  // Here we grab the text from the input box
  // var recipeSearch = $("#recipeSearch").val().trim();
  // allowedIngredient = $("#allowedIngredient").val().trim();
  // allowedDiet = $("#allowedDiet").val().trim();
  // allowedAllergy = $("#allowedAllergy").val().trim();
  


  // Here we construct our URL
  // var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=1f483524_app_key=099b7a16023da9a9f8e9fd29763e0aa0&q=" + recipeSearch + "&requirePictures=true&" + allowedIngredient + allowedDiet + allowedAllergy;
  var queryURL = "http://api.yummly.com/v1/api/recipes?_app_id=1f483524&_app_key=099b7a16023da9a9f8e9fd29763e0aa0&q=broccoli&allowedDiet[]=388^Lacto%20vegetarian";

  // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
  // and display it in the div with an id of movie-view

  // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function (response) {
    
    const recipes = response.matches;

    recipes.forEach(function(recipe){
      console.log(recipe.recipeName);
      recipe.ingredients.forEach(function(ingredient){
        console.log("--" + ingredient);
      });
    });

  
    // $("#searchesResults").append(response);
    // $("#searches-div").toggle(false);
    // $("#searchesResults").toggle(true);
  });
// });
// $addRecipe.on("click");
// $contactButton.on("#contactButton");