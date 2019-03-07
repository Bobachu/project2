var quotes = ["Let’s avo-cuddle!", "Rock out with your guac out.", "Everything I avo wanted.", "This guacs my world.", "You have guac to be kidding me.", "What is a priest’s favorite food? Holy guacamole!", " I’m avocontrol.", "Back that Hass up.", "Don’t worry avo it!", "Avo great birthday!", "I’ve hit guac bottom.", "I just want to avo good time!", "Things are about to get guacward.", "Guac ‘n roll!", "This is avocado this world!", "Thanks for being my other half.", "You can kiss my Hass.", "Zero guacs given."]

function avoquotes(){
    var randnum = Math.floor(Math.random() * (quotes.length));
    $("#avoquotes").text(quotes[randnum]);
}

avoquotes();