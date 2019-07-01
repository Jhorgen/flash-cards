export class FlashCard {
  constructor(question, choices, answerIndex) {
    this.question = question;
    this.choices = choices;
    this.correctChoice = choices[answerIndex];
  }

  scrambleChoices() {
    for (let i = this.choices.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
  }

  isCorrectChoice(selectedChoice) {
    return selectedChoice.equals(this.correctChoice);
  }

}

export class
