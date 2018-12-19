class EngEz {
    constructor(funcForRandom, nowText) {
      this.funcForRandom = funcForRandom;
      this.texts = [
      "beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer beer",
      "save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save save",
      "habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit habit",
      "treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat treat",
      "full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full full",
      "offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer offer",
      "wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound wound",
      "base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base base"
      ]
      this.nowNumber = Math.floor(Math.random() * this.texts.length);
      this.nowText = nowText;
    }
  
    get getText() {
      return funcForRandom(this.nowNumber, this.texts, this.nowText);
    }
  
  
  }