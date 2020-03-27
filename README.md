# Project-4---Bollywood-Trivia-

## Basics!:

Welcome to Bollywood Trivia! Test your knowledge of Bollywood's famous blockbusters and actors.

This trivia game utilized a combination of HTML, CSS, JavaScript, and DOM manipulation to render in the browswer. The game uses radio buttons to represent the answer choices the user can select, as well as a "Final Answer" submit button that verifies if the user's choice is correct.

Once the game validates the user's choice, a message appears telling the user whether or not they answered correctly. This message also includes a "Next" button to advance to the following question.

After the "Next" button is clicked, a photo appears in the bottom left-hand corner that represents the correct answer to the preceding question.

The game also keeps score for the user.

## Approach:

In building this game, the developer created a bare-bones rendering of the game's skeleton with minimal CSS styling. Then, the developer focused on writing the "game logic", or functionality, of the game. After loading the questions and answer choices into an object and writing the required functions to make the game operational, the developer then finalized the styling and images.

## Challenges:

The developer used radio buttons for the first time, so most of the challenges pertained to accessing the information represented by the radio buttons to validate the user's answer choice, as well as styling the radio buttons.

Here is a code snippet of how the developer loaded information into a specific radio button to render as an answer choice:

```
q1.textContent = trivia[questionIndex].question;
  options[0].value = trivia[questionIndex].A;
  optionName[0].textContent = trivia[questionIndex].A;
```

And, here is an example of how the game validates the user's selection:

```
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
```

## Unsolved Problems & Future Goals:

Ultimately, the game should render images as clickable answer choices the user can select. Radio buttons may not be the best tool to achieve this goal, so future iterations should explore other options. Additionally, questions should display in randomized order every time the rest button is clicked.
