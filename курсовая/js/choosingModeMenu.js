let firstPlayCheck = true;
let nowPlayMode = "";
let selectMenu = $("select");

selectMenu.on("change", function() {
  $("body").click(function() {
    //   alert(0);
      characterInBorder = useText.length-3;
    });

  // $(".inputField").mouseenter(function() {

  //   });

  //   $(".inputField").mouseleave(function() {
  //     clearInterval(idTime);
  //   });

  switch ($(this).val()) {
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
  nowPlayMode = $(this).val();
  characterInBorder = 0;
  time = 0;
  text = formatText(text);
  useText = getUseText(text);
  leftText = text.slice(useText.length, text.length);
  linefeedSum = searshAllEntry(text, "\n");
    useText= useText.split("\n").join(" \n");
  $(".result").css("display", "none");
  $(".inputField").css("opacity", "0.3");
  $(".inputField").html(
    "<mark class='bordered'>" +
      useText[0] +
      "</mark>" +
      useText.slice(1, useText.length)
  );
  $("main header p:first-child").html("Можете начинать печатать");
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
  this.blur();
});
