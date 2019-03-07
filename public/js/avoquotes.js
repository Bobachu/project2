var quotes = [
  "Let’s avo-cuddle!",
  "Rock out with your guac out.",
  "Everything I avo wanted.",
  "This guacs my world.",
  "You have guac to be kidding me.",
  "What is a priest’s favorite food? Holy guacamole!",
  " I’m avocontrol.",
  "Back that Hass up.",
  "Don’t worry avo it!",
  "Avo great day!",
  "I’ve hit guac bottom.",
  "I just want to avo good time!",
  "Things are about to get guacward.",
  "Guac ‘n roll!",
  "This is avocado this world!",
  "Thanks for being my other half.",
  "You can kiss my Hass.",
  "Zero guacs given.",
  "Bravocado",
  "Avocabro hug.",
  "Have-ocado a bite to eat.",
  "In a while, guacodile.",
  "It was guaccidental.",
  "Running out of guacxygen.",
  "Hasstile takeover",
  "A guac on the wild side"
];

function avoquotes() {
  var randnum = Math.floor(Math.random() * quotes.length);
  $("#avoquotes").text(quotes[randnum]);
}
var timer;

function timedAvoquotes() {
  timer = setInterval(avoquotes, 10000);
}

avoquotes();
timedAvoquotes();
