let characterInBorder = 0; //индекс текущей буквы
let showingTypingCondition = $("main header p:first-child"); //элемент, хранящий состояние печатание(в процессе или на паузе)
let checkMistake = false; //проверка наличия ошибки, запрещая ввод до её исправления
let checkFirstMistake = true; //проверка наличия первой ошибки и при попытке её исправления не возвращается сразу на предыдущую букву
let checkPause = false; //проверка нажатия паузы
let startTyping = true; //проверка начала ввода в начале или после паузы

/**
 * 
 * функция, срабатывающая при нажатии символьной клавиши и совершающая 
 * много действий, связанных с проверками на ввод, запуском, остановкой учета и счета и т.д.
 * @param {keypress} event хранит текущее событие
 */
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

  if ( // проверка правильности ввода
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

    if (characterInBorder == useText.length) { // проверка на конец видимого фрагмента текста и замена на следующий
      replaceUseText();
    }

    if (useText == "") { // проверка на конец ввода и вывод результата
      clearInterval(idTime); // остановка счета времени
      $(".result").css("display", "block");
      $(".result-speed").text(getSpeedTyping(text, time)); // вывод нужных в блоке результата данных
      $(".statistic .now-record").text(
        localStorage.getItem(nowPlayMode)
          ? localStorage.getItem(nowPlayMode) + " зн/мин"
          : "отсутствует"
      );
      $(".statistic .time").text(getStringMinuteFromSec(time));
      if (getSpeedTyping(text, time) > +localStorage.getItem(nowPlayMode)) { // проверка на совершения рекорда и замена даннхы на localStorage
        $(".result-speed").addClass("result-speed-record");
        localStorage.setItem(nowPlayMode, getSpeedTyping(text, time));
        writeRecords();
      } else {
        $(".result-speed").removeClass("result-speed-record");
      }
      startTyping = true; // обновляем перменные, отвечающие за проверку начала ввода
      firstPlayCheck = true;
      $(".inputField").html("");
      $("main header p:first-child").html("");
      $("main header p mark").css("display", "none");
      $("body").off("keydown");
      $("body").off("keypress");
      return 0;
    }

    $(".inputField").html( // выводим текст, отформатированный в соответствии с прогрессом ввода
      "<mark class='successText'>" +
        useText.slice(0, characterInBorder) +
        "</mark>" +
        "<mark class='bordered'>" +
        useText[characterInBorder] +
        "</mark>" +
        useText.slice(characterInBorder + 1, useText.length)
    );
  } else { // при ошибке ввода подсвечиваем красным место ошибки, запрещаем дальшней ввод
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


/**
 * Проверяет нажатие паузы кнопкой Esc или стирания напечатанного символа. 
 * Осуществляет переход на текущий(при исправлении) или на
 * предыдущий символ(при нажатии без предшествующей ошибки)
 * по нажатию клавиши Backspace
 * 
 * @param {keydown} event хранит тип события
 */
function pauseOrBackTyping(event) {
  // backspace = 8, Esc = 27
  if (event.keyCode == 8) {
    if (!checkPause) {
      $(".inputField").css("opacity", "0.7");
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
    if (checkFirstMistake && checkMistake) {
      checkFirstMistake = false;
      checkMistake = false;
    } else if (characterInBorder > 0) {
      characterInBorder--;
      $(".inputField").css("opacity", "0.7");
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


/**
 * Функция отключает часть интерфеса, связанного с процессом ввода,
 * останавливает счет времени и учёт скорости.
 */
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

