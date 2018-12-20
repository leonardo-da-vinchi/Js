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
    $("main header p mark:nth-of-type(n+2)").css("display", "inline");
    showingTypingCondition.html("Пауза(Esc)");
    showingTypingCondition.css("cursor", "pointer");
    showingTypingCondition.on("mouseenter", function() {
      $(this).css("text-decoration", "underline");
    });

    showingTypingCondition.on("mouseleave", function() {
      $(this).css("text-decoration", "none");
    });
    showingTypingCondition.on("click", function() {
      pauseDeals();
    });
    idTime = setInterval(TimeGo, 1000);
    idSpeed = setInterval(speedShowNow, 2000);
  }

  if (
    String.fromCharCode(event.charCode) == useText[characterInBorder] &&
    !checkMistake
  ) {
    if (!checkFirstMistake) {
      checkFirstMistake = true;
    }
    charachtersForSpeed++;

    $(".inputField").css("opacity", "0.7");
    characterInBorder++;
    if (useText[characterInBorder] == "\n") {
      characterInBorder++;
    }

    if (characterInBorder == useText.length) {
      replaceUseText();
    }

    if (useText == "") {
      clearInterval(idTime);
      $(".result").css("display", "block");
      $(".result-speed").text(getSpeedTyping(text, time));
      $(".statistic .now-record").text(
        localStorage.getItem(nowPlayMode)
          ? localStorage.getItem(nowPlayMode) + " зн/мин"
          : "отсутствует"
      );
      $(".statistic .time").text(getStringMinuteFromSec(time));
      if (getSpeedTyping(text, time) > localStorage.getItem(nowPlayMode)) {
        $(".result-speed").addClass("result-speed-record");
        localStorage.setItem(nowPlayMode, getSpeedTyping(text, time));
        writeRecords();
      } else {
        $(".result-speed").removeClass("result-speed-record");
      }
      startTyping = true;
      firstPlayCheck = true;
      $(".inputField").html("");
      $("main header p:first-child").html("");
      $("main header p mark").css("display", "none");
      $("body").off("keydown");
      $("body").off("keypress");
      return 0;
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
    checkFirstMistake = true;
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
    if (checkFirstMistake && checkMistake) {
      checkFirstMistake = false;
      checkMistake = false;
    } else if (characterInBorder > 0) {
      characterInBorder--;
    } else if (characterInBorder < 0) {
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
  } else if (event.keyCode == 27 && checkPause) {
    pauseDeals();
  }
}

function pauseDeals() {
  clearInterval(idTime);
  clearInterval(idSpeed);
  charachtersForSpeed = 0;
  checkPause = false;
  startTyping = true;
  showingTypingCondition.css("text-decoration", "none");
  showingTypingCondition.off();
  showingTypingCondition.css("cursor", "default");
  $(".inputField").css("opacity", "0.3");
  showingTypingCondition.html("Можете продолжать печатать");
  $("main header p mark:nth-of-type(n+2)").css("display", "none");
}
