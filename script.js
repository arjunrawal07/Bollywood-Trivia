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
let poster = document.querySelector(".image");
let questionIndex = 0;
let optionAIndex = 0;
let optionBIndex = 0;
let optionCIndex = 0;
let resetButton = document.querySelector(".reset");
let resetMsg = document.querySelector(".resetMsg");
let header1 = document.querySelector("h1");
let header2 = document.querySelector("h2");

let trivia = [
  {
    question: "Which of the following is not a Bollywood film?",
    A: "Khabi Khushi Khabi Gham",
    B: "Slumdog Millionaire",
    C: "Margarita with a Straw",
    Solution: "Slumdog Millionaire",
    image: "https://i.imgur.com/ygYCjcx.jpg?2",
  },
  {
    question:
      "This awards event recognizes artistic and technical excellence in the Hindi-language film industry of India.",
    A: "Academy Awards",
    B: "Filmfare Awards",
    C: "National Film Awards",
    Solution: "Filmfare Awards",
    image: "https://i.imgur.com/GNaaeNT.png?2",
  },
  {
    question:
      "What Bollywood movie features an alien akin to Hollywood's E.T.?",
    A: "Koi Mil Gaya",
    B: "Bhoot",
    C: "Jadoo",
    Solution: "Koi Mil Gaya",
    image: "https://i.imgur.com/cU9zAgz.jpg",
  },
  {
    question:
      "According to the BBC, Bollywood's first major LGBTQ film was ______?",
    A: "Shubh Mangal Zyada Saavdhan",
    B: "Ek Ladki Ko Dekha Toh Aisa Laga",
    C: "Hum Saath Saath Hain",
    Solution: "Ek Ladki Ko Dekha Toh Aisa Laga",
    image: "https://i.imgur.com/ECKcKHz.jpg?2",
  },
  {
    question:
      "Which movie centers around a rural village that rebels against the British occupation who subjected the village to an unprecendented land tax?",
    A: "Lagaan",
    B: "Rang De Basaanti",
    C: "Chakde! India",
    Solution: "Lagaan",
    image: "https://i.imgur.com/46dMBB4.jpg?2",
  },
  {
    question:
      "This movie tells the story of a young woman, played by Rani Mukherji, who moves to Mumbai and becomes a sex worker to send money back to her home in Banaras and pay for her ailing father's medicines.",
    A: "Mujhse Shaadi Karogi",
    B: "Ta Ra Rum Pum",
    C: "Laaga Chunari Mein Daag",
    Solution: "Laaga Chunari Mein Daag",
    image: "https://i.imgur.com/KW8qBQI.jpg?2",
  },
  {
    question:
      "This movie tells the story of first-generation immigrants from India to the U.S., and their American-born children Gogol and Sonia. This film is adapted from a novel written by Pulitzer Prize winning author Jhumpa Lahiri.",
    A: "Interpreter of Maladies",
    B: "The Namesake",
    C: "Blue Boy",
    Solution: "The Namesake",
    image: "https://i.imgur.com/D7bXr5o.jpg?2",
  },
  {
    question:
      "In 2005, this movie was named the Best Film in 50 Years at the 50th Filmfare Awards. This movie is also considered a classic, and by some accounts, the highest-grossing Bollywood movie of all time.",
    A: "Dilwale",
    B: "Sholay",
    C: "Kal Ho Naa Ho",
    Solution: "Sholay",
    image: "https://i.imgur.com/jmKS5R6.jpg?1",
  },
  {
    question:
      "This actress won the Filmfare Award for Best Actress in 1973, is an outspoken animal rights activist, served as a Member of Parliament, and is classically trained in Bharatnatyam (one of the five styles of Indian classical dance).",
    A: "Aishwarya Rai",
    B: "Tabu",
    C: "Hema Malini",
    Solution: "Hema Malini",
    image: "https://i.imgur.com/y97YjOA.jpg",
  },
  {
    question:
      "This actress is one of the highest-paid actresses in India, an outspoken advocate for mental health issues, and is from Bangalore.",
    A: "Priyanka Chopra",
    B: "Deepika Padukone",
    C: "Kareena Kapoor",
    Solution: "Deepika Padukone",
    image: "https://i.imgur.com/LDhN6vd.jpg?2",
  },
];

function updateScore() {
  scoreValue = scoreValue + 1;
  score.textContent = `Score = ${scoreValue} / 10`;
}
function playGame(e) {
  e.preventDefault();
  header2.style.opacity = "0.0";
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
  poster.setAttribute("src", trivia[questionIndex].image);
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
  } else {
    console.log("yay");
  }
}

function nextCorrect(e) {
  e.preventDefault();
  questionIndex = questionIndex + 1;
  if (questionIndex <= trivia.length - 1) {
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
    poster.setAttribute("src", trivia[questionIndex].image);
    updateScore();
  } else {
    header1.textContent =
      "Congrats on finishing the game! Click the green reset button to play again.";
  }
}

function nextWrong(e) {
  e.preventDefault();
  questionIndex = questionIndex + 1;
  if (questionIndex <= trivia.length - 1) {
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
    poster.setAttribute("src", trivia[questionIndex].image);
  } else {
    header1.textContent =
      "Congrats on finishing the game! Click the green reset button to play again.";
  }
}

function reset(e) {
  e.preventDefault();
  location.reload(true);
}
buttonPlay.addEventListener("click", playGame);
form.addEventListener("submit", validateAnswer);
correctButton.addEventListener("click", nextCorrect);
wrongButton.addEventListener("click", nextWrong);
resetButton.addEventListener("click", reset);
