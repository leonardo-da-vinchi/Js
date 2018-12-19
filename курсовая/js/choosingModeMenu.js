let firstPlayCheck = true;
let selectMenu = $("select");

selectMenu.on("change", function () {
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
    characterInBorder = 0;
    text = formatText(text);
    useText = getUseText(text);
    leftText = text.slice(0, useText.length);
    $(".inputField").css("opacity", "0.3");
    $(".inputField").html("<mark class='bordered'>" + useText[0] + "</mark>" + useText.slice(1, useText.length));
    $("main header p:first-child").html("Можете начинать печатать");
    if (firstPlayCheck){
        $("main header p mark").css("display", "inline");
        $(".play-mode img").css("display", "block");
        $("body").on("keydown", pauseOrBackTyping);   
        $("body").on("keypress", textInputing);
        $(".play-mode img").on("click", function () {
            selectMenu.trigger("change");
        });
        firstPlayCheck = false;
    }
    this.blur();
    
    
});





