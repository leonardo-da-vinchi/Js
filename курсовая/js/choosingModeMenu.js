let firstPlayCheck = true; // проверка на самую первую игру в текущей сессии
let nowPlayMode = ""; // перменная для хранения выбранного пользователем режима 
let selectMenu = $("select"); //перменная, указываяющая на элемент страницы, в котором осуществляется выбор режима


/**
 * Назначаем обрабочик изменеия режима, при котором осуществляем необходимые нам действия
 * 
 */
selectMenu.on("change", function() {
  switch ($(this).val()) { // получаем текст, соответвующий выбранному режиму
    case "rus-ez":
      text = new RusEz(funcForRandom, text).getText();
      break;

    case "rus-norm":
      text = new RusNorm(funcForRandom, text).getText();
      break;

    case "rus-hard":
      text = new RusHard(funcForRandom, text).getText();
      break;

    case "eng-ez":
      text = new EngEz(funcForRandom, text).getText();
      break;

    case "eng-norm":
      text = new EngNorm(funcForRandom, text).getText();
      break;

    case "eng-hard":
      text = new EngHard(funcForRandom, text).getText();
      break;
  }
  nowPlayMode = $(this).val(); // получаем имя выбранного режима
  characterInBorder = 0; // обнуляем перменные для процееса ввода
  time = 0;
  text = formatText(text); // форматирует полученный текст в удобный для обратботки и отображения
  useText = getUseText(text); // определяем фрагменты текста, которые будут отображаться в данный момент
  leftText = text.slice(useText.length, text.length); // определяем фрагменты текста, которые отобразим потом
  linefeedSum = searshAllEntry(text, "\n"); // узнаем количесво переходов на след строку в отфарматированном тексте
    useText= useText.split("\n").join(" \n");
  $(".result").css("display", "block"); // делаем невидимым интерефейс, связанный с окончанием ввода
  $(".inputField").css("opacity", "0.3"); 
  $(".inputField").html( // вставляем в поле для отображения текста наш текст, подготовленный для начала печати
    "<mark class='bordered'>" +
      useText[0] +
      "</mark>" +
      useText.slice(1, useText.length)
  );
  $("main header p:first-child").html("Можете начинать печатать"); // делаем невидимым интерефейс, связанный с вводом
  if (firstPlayCheck) { 
    $("main header p mark:first-child").css("display", "inline");
    $(".play-mode img").css("display", "block");
    $("body").on("keydown", pauseOrBackTyping);
    $("body").on("keypress", textInputing);
    $(".play-mode img").on("click", function() {
      selectMenu.trigger("change");
    });
    firstPlayCheck = false;
  }
  this.blur(); //убираем фокус с элемента, где осуществляли выбор режима, чтобы нажатия клавиш не провоцировался выбор
});
