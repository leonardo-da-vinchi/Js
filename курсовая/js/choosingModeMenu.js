let selectMenu = $("select");
selectMenu.on("change", function(){
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
    text = formatText(text); 
    useText = getUseText(text);
    $(".textarea").html('<mark>'+useText[0]+'</mark>'+useText.slice(1,useText.length));
    $("main header p:first-child").html("Можете начинать печатать");
    $("main header p mark").css("display", "inline");
    $(".play-mode img").css("display", "block");  
    });

    $(".play-mode img").on("click", function(){
        selectMenu.trigger("change");
    });

