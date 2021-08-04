var randomNumber1 = Math.floor(Math.random() * 6)+1;

var randomImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImage;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);

if (randomNumber1>randomNumber2) {
  document.querySelectorAll("h1")[1].innerHTML = "Player 1 wins!"
}
else if (randomNumber1<randomNumber2) {
  document.querySelectorAll("h1")[1].innerHTML = "Player 2 wins!"
}
else {
  document.querySelectorAll("h1")[1].innerHTML = "DRAW!"
}
