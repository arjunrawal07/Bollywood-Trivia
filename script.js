let buttonPlay = document.querySelector(".play");
let mainBox = document.querySelector(".mainbox");
let q1 = document.querySelector(".question1");
let options = document.querySelectorAll("[type = 'radio']");
let optionName = document.querySelectorAll("label");
let form = document.querySelector("form");
let score = document.querySelector(".score");
let scoreValue = 0;
let correctMessage = document.querySelector(".correct");
let wrongMessage = document.querySelector(".wrong");
let correctButton = document.querySelector(".next");
let wrongButton = document.querySelector("#wrong");

let trivia = [
  {
    question: "What was Hrithik Roshan's first film?",
    A: "Khabi Khushi Khabi Gham",
    B: "Dhoom 2",
    C: "Kaho Naa...Pyaar Hai",
    Solution: "Kaho Naa...Pyaar Hai"
  },
  {
    question:
      "Which actor debuted in the film Sawaryia?  This actor also starred in Bachna Ae Haseeno Ajab Prem Ki Ghazab Kahani",
    A: "Salman Khan",
    B: "Ranveer Singh",
    C: "Ranbir Kapoor",
    Solution: "Ranbir Kapoor"
  },
  {
    question: "What was the name of the alien in Koi Mil Gaya?",
    A: "Jadoo",
    B: "Baloo",
    C: "Ladoo",
    Solution: "Jadoo"
  },
  {
    question:
      "According to the BBC, Bollywood's fist major LGBTQ film was ______?",
    A: "Shubh Mangal Zyada Saavdhan",
    B: "Ek Ladki Ko Dekha Toh Aisa Laga",
    C: "Hum Saath Saath Hain",
    Solution: "Ek Ladki Ko Dekha Toh Aisa Laga"
  },
  {
    question:
      "Which movie centers around a rural village that rebels against the British colonizers who subjected the village to an unprecendented land tax?",
    A: "Lagaan",
    B: "Rang De Basaanti",
    C: "Chakde! India",
    Solution: "Lagaan"
  },
  {
    question:
      "This movie tells the story of a young woman, played by Rani Mukherji, who moves to Mumbai and turns to sex work in order to send mondy back to her home in Banaras and pay for her ailing father's medicines.",
    A: "Mujhse Shaadi Karogi",
    B: "Ta Ra Rum Pum",
    C: "Laaga Chunari Mein Daag",
    Solution: "Laaga Chunari Mein Daag"
  },
  {
    question:
      "This movie tells the story of first-generation immigrants from India to the U.S., and their American-born children Gogol and Sonia. This film is adapted from a novel written by Pulitzer Prize winning author Jhumpa Lahiri.",
    A: "Interpreter of Maladies",
    B: "The Namesake",
    C: "Blue Boy",
    Solution: "The Namesake"
  },
  {
    question: "What was the name of Basanti's horse in Sholay?",
    A: "Ram",
    B: "Leela",
    C: "Dhano",
    Solution: "Dhano"
  },
  {
    question:
      "This actress won the Filmfare Award for Best Actress in 1973, is an outspoken animal rights activist, served as a Member of Parliament, and is classically trained in Bharatnatyam (one of the five styles of Indian classical dance).",
    A: "Aishwarya Rai",
    B: "Tabu",
    C: "Hema Malini",
    Solution: "Hema Malini"
  },
  {
    question:
      "This actress is one of the highest-paid actresses in India, an outspoken advocate for mental health issues, and is from Bangalore.",
    A: "Priyanka Chopra",
    B: "Deepika Padukone",
    C: "Kareena Kapoor",
    Solution: "Deepika Padukone"
  }
];
let questionIndex = 0;
let optionAIndex = 0;
let optionBIndex = 0;
let optionCIndex = 0;

function updateScore() {
  scoreValue = scoreValue + 1;
  score.textContent = `Score = ${scoreValue} / 10`;
}
// for (let i = 0; i < trivia.length; i++) {
function playGame(e) {
  e.preventDefault();
  buttonPlay.style.opacity = "0.0";
  mainBox.style.opacity = "1.0";
  form.style.opacity = "1.0";
  q1.style.opacity = "1.0";
  q1.textContent = trivia[questionIndex].question;
  options[0].value = trivia[questionIndex].A;
  optionName[0].textContent = trivia[questionIndex].A;
  options[1].value = trivia[questionIndex].B;
  optionName[1].textContent = trivia[questionIndex].B;
  options[2].value = trivia[questionIndex].C;
  optionName[2].textContent = trivia[questionIndex].C;
}

function validateAnswer(e) {
  e.preventDefault();
  if (
    options[0].checked == true &&
    options[0].value !== trivia[questionIndex].Solution
  ) {
    wrongMessage.style.opacity = "1.0";
  } else if (
    options[0].checked == true &&
    options[0].value === trivia[questionIndex].Solution
  ) {
    correctMessage.style.opacity = "1.0";
    updateScore();
  } else if (
    options[1].checked == true &&
    options[1].value !== trivia[questionIndex].Solution
  ) {
    wrongMessage.style.opacity = "1.0";
  } else if (
    options[1].checked == true &&
    options[1].value === trivia[questionIndex].Solution
  ) {
    correctMessage.style.opacity = "1.0";
    updateScore();
  } else if (
    options[2].checked == true &&
    options[2].value !== trivia[questionIndex].Solution
  ) {
    wrongMessage.style.opacity = "1.0";
  } else if (
    options[2].checked == true &&
    options[2].value === trivia[questionIndex].Solution
  ) {
    correctMessage.style.opacity = "1.0";
    updateScore();
  } else {
    console.log("yay");
  }
}

function next(e) {
  questionIndex = questionIndex + 1;
  q1.textContent = trivia[questionIndex].question;
  optionAIndex = optionAIndex + 1;
  optionBIndex = optionBIndex + 1;
  optionCIndex = optionCIndex + 1;
  options[0].value = trivia[optionAIndex].A;
  optionName[0].textContent = trivia[optionAIndex].A;
  options[1].value = trivia[optionBIndex].B;
  optionName[1].textContent = trivia[optionBIndex].B;
  options[2].value = trivia[optionCIndex].C;
  optionName[2].textContent = trivia[optionCIndex].C;
  correctMessage.style.opacity = "0.0";
  wrongMessage.style.opacity = "0.0";
}

buttonPlay.addEventListener("click", playGame);
form.addEventListener("submit", validateAnswer);
correctButton.addEventListener("click", next);
wrongButton.addEventListener("click", next);
