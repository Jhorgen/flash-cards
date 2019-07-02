export class FlashCard {
  constructor(question, choices, answerIndex) {
    this.question = question;
    this.choices = choices;
    this.correctChoice = choices[answerIndex];
  }

  scrambleChoices() {
    for (let i = this.choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      const temp = this.choices[i];
      this.choices[i] = this.choices[j];
      this.choices[j] = temp;
    }
  }

  isCorrectChoice(selectedChoice) {
    return selectedChoice.equals(this.correctChoice);
  }

}
