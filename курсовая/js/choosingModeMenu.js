let selectMenu = $("select");
selectMenu.on("change", function(){
    switch ($(this).val()) {
        case "rus-ez":
        text = new RusEz(funcForRandom, $("textarea").text()).getText;
        break;

        case "rus-norm":
        text = new RusNorm(funcForRandom, $("textarea").text()).getText;
        break;

        case "rus-hard":
        text = new RusHard(funcForRandom, $("textarea").text()).getText;
        break;

        case "eng-ez":
        text = new EngEz(funcForRandom, $("textarea").text()).getText;
        break;

        case "eng-norm":
        text = new EngNorm(funcForRandom, $("textarea").text()).getText;
        break;

        case "eng-hard":
        text = new EngHard(funcForRandom, $("textarea").text()).getText;
        break;
    }
    text = formatText(text); 
    useText = getUseText(text);
    $("textarea").text(useText);
    $("main header p:first-child").html("Можете начинать печатать");
    $(".play-mode img").css("display", "block");  
    });

    $(".play-mode img").on("click", function(){
        selectMenu.trigger("change");
    });

