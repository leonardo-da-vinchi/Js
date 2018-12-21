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
      this.nowText = nowText;
    }
  
    getText() {
      return funcForRandom(this.texts, this.nowText);
    }
  
  
  }