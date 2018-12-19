let characterInBorder = 0;
let showingTypingCondition = $("main header p:first-child");
let checkMistake = false;
let checkFirstMistake = true;
let checkPause = false;
let startTyping = true;

function textInputing(event) {
  if (startTyping) {
    startTyping = false;
    checkPause = true;
    showingTypingCondition.html("Пауза(Esc)");
    showingTypingCondition.css("cursor", "pointer");
    showingTypingCondition.on(
      "mouseenter",
      function() {
        $(this).css("text-decoration", "underline");
      });

      showingTypingCondition.on(
      "mouseleave",function() {
        $(this).css("text-decoration", "none");
      }
    );
    showingTypingCondition.on("click", function() {
      pauseDeals();
    });
  }

  if (
    String.fromCharCode(event.charCode) == useText[characterInBorder] &&
    !checkMistake
  ) {
    if (!checkFirstMistake) {
      checkFirstMistake = true;
    }
    $(".inputField").css("opacity", "0.7");
    characterInBorder++;
    if (useText[characterInBorder] == "\n") {
      characterInBorder++;
    }
    $(".inputField").html(
      "<mark class='successText'>" +
        useText.slice(0, characterInBorder) +
        "</mark>" +
        "<mark class='bordered'>" +
        useText[characterInBorder] +
        "</mark>" +
        useText.slice(characterInBorder + 1, useText.length)
    );
  } else {
    checkMistake = true;
    $(".inputField").css("opacity", "0.7");
    $(".inputField").html(
      "<mark class='successText'>" +
        useText.slice(0, characterInBorder) +
        "</mark>" +
        "<mark class='red-bordered redText'>" +
        useText[characterInBorder] +
        "</mark>" +
        useText.slice(characterInBorder + 1, useText.length)
    );
  }
}

function pauseOrBackTyping(event) {
  // backspace = 8, Esc = 27
  if (event.keyCode == 8) {
    checkMistake = false;
    if (checkFirstMistake) {
      checkFirstMistake = false;
      characterInBorder++;
    }
    characterInBorder--;
    $(".inputField").html(
      "<mark class='successText'>" +
        useText.slice(0, characterInBorder) +
        "</mark>" +
        "<mark class='bordered'>" +
        useText[characterInBorder] +
        "</mark>" +
        useText.slice(characterInBorder + 1, useText.length)
    );
  } else if (event.keyCode == 27 && checkPause) {
    pauseDeals();
  }
}

function pauseDeals() {
  checkPause = false;
  startTyping = true;
  showingTypingCondition.css("text-decoration", "none");
  showingTypingCondition.off();
  showingTypingCondition.css("cursor", "default");
  $(".inputField").css("opacity", "0.3");
  showingTypingCondition.html("Можете продолжать печатать");
}
