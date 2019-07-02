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
];
let correctChoiceIndex = 0;
flashCards.push(new FlashCard(question, choices, correctChoiceIndex));

// Question 2
question = "How many scripts can you have in a document?";
choices = [

  "An unlimited number",
  "7",
  "565"
];

flashCards.push(new FlashCard(question, choices, correctChoiceIndex));

// Question 3
question = "What is a javascript block?";
choices = [
  "A group of statements grouped by curly brackets",
  "A group of loops grouped by parentheses",
  "A term used to describe a computer that runs javascript"
];

flashCards.push(new FlashCard(question, choices, correctChoiceIndex));

let points = 0;
let flashCard = null;
let timeoutID = 0;
let intervalID = 0;
let timeoutSeconds = 10;
let seconds = timeoutSeconds;
let cardIndex = 0;

$(document).ready(function() {
  displayCard(cardIndex);

  // Handle submit button
  $('.formOne').submit(event => {
    event.preventDefault();

    // Check if selected choice is correct
    let inputValue = parseInt($("input[name='question']:checked").val());
    if (flashCard.choices[inputValue] == flashCard.correctChoice) {
      // Right answer
      points = points + 1;
      const i = flashCard.choices.indexOf(flashCard.correctChoice);
      $('#choice' + i).addClass('highlight');
      $('#submitButton').hide();
      $("#nextButton").show();
    } else {
      // Wrong answer
      $('#choice' + inputValue).addClass('highlightRed');
    }
  });

  $("#nextButton").click(function(){
    $('input[name="question"]').prop("checked", false);
    $('.choice').removeClass('highlight');
    $('.choice').removeClass('highlightRed');
    cardIndex = (cardIndex + 1) % flashCards.length;
    displayCard(cardIndex);
    $("#nextButton").hide();
    $('#submitButton').show();
  });
});

function displayCard(cardIndex) {
  // add flashcard data to html
  flashCard = flashCards[cardIndex];
  flashCard.scrambleChoices();
  $('#question').text(flashCard.question);
  flashCard.choices.forEach( (choice, index) => {
    $('#choice'+index).text(choice);
  });
  // reset timeout
  clearTimeout(timeoutID);
  timeoutID = setTimeout(function(){
    // Highligh correct choice
    const i = flashCard.choices.indexOf(flashCard.correctChoice);
    $(`input[value="${i}"]`).prop("checked", true);
    $('#choice' + i).addClass('highlight');
    clearInterval(intervalID);
    $('#timer').text(0);
    $('#submitButton').hide();
    $('#nextButton').show();
  }, timeoutSeconds * 1000);
  // reset countdown timer
  clearInterval(intervalID);
  seconds = timeoutSeconds;
  $('#timer').text(timeoutSeconds);
  intervalID = setInterval(function(){
    $('#timer').text(--seconds);
  }, 1000);
}
