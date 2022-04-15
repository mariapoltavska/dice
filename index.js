randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  newHeading = "Player 1 wins! 🎉";
} else if (randomNumber1 < randomNumber2) {
  newHeading = "Player 2 wins! 🎉";
} else {
  newHeading = "It's a tie!✨";
}

document.querySelector("h1").textContent = (newHeading);
