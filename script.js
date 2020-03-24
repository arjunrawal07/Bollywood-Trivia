let buttonPlay = document.querySelector(".play");
let q1 = document.querySelector(".question1");
let optionA = document.querySelector("#optionA");
let optionB = document.querySelector("#optionB");
let optionC = document.querySelector("#optionC");

function playGame(e) {
  e.preventDefault();
  buttonPlay.style.opacity = "0.0";
  q1.style.opacity = "1.0";
  optionA.style.opacity = "1.0";
  optionB.style.opacity = "1.0";
  optionC.style.opacity = "1.0";
}
buttonPlay.addEventListener("click", playGame);
