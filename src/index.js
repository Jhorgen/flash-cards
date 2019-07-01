import { FlashCard } from './flashcards.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


const flashCards = [];
// Question 1
let question = "JavaScript is a _____ programming language";
let choices = [
  "interpreted",
  "compiled",
  "deprecated"
]
let correctChoiceIndex = 0;
flashCards.push(new FlashCard(question, choices, correctChoiceIndex));

// Question 2
question = "";
choices = [
  "",
  "",
  ""
]
let correctChoiceIndex = 0;
flashCards.push(new FlashCard(question, choices, correctChoiceIndex));

// Question 3
question = "";
choices = [
  "",
  "",
  ""
]
let correctChoiceIndex = 0;
flashCards.push(new FlashCard(question, choices, correctChoiceIndex));

$(document).ready(function() {
  // load a flahcard into html
  // Set interval for repeat
    // If time runs out
      // display correct choice and subtract a point
      // remove flashcard from array?
      // reload new flashCard

  // Handle submit button
  $('.formOne').submit(event => {
    event.preventDefault();
    // Check if selected choice is correct

    // Adjust points

    // Remove flashcard from array

    // If array is empty, show winning message

    // Else reload with new flashcard

  });
});

displayCard(flashCard) {

}
