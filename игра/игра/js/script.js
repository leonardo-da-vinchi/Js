let inputName = $(".signin input");
let buttonSign = $(".signin button");
let gamingField = $(".gaming main");
let score = $(".score mark");
let time = 90;
let gamingId = 0;
let countFishes = 10;
let img;
let size;
let name;
let pos;
let id;
let idd;
let point = 0;
let ppp, ppa;

inputName.on("input", function() {
  if ($(this).val() != "") {
    name = $(this).val();
    buttonSign.attr("disabled", false);
    buttonSign.css("opacity","1");
  } else {
      buttonSign.attr("disabled", true);
      buttonSign.css("opacity","0.7");
    }
});

buttonSign.on("click", () => {
  $(".signin").css("display", "none");
  $(".gaming").css("display", "block");
  gamingField.css({
    "background": `url(img/background-gaming/${Math.floor(Math.random() * 3)}.jpg) no-repeat`,
    "background-size": "cover"
  }
  );
  $(".name mark").text(name);
  timer(time);
  gamingField.ready(gaming());
});

function gaming() {
  while (countFishes != 0) {
    img = `<img src="img/fishes/${Math.floor(Math.random() * 4)}.png"></img>`;
    pos = "left";
    gamingField.append(img);
    // gamingField.find("img").last()[0].marginLeft = Math.random()*500;
    animate(gamingField.find("img").last(), pos);
    countFishes--;
    ppp = Math.ceil(Math.random() * 3);
    gamingField.find("img").last()[0].style.width =
      gamingField
        .find("img")
        .last()
        .width() * ppp;
    switch (ppp) {
      case 3:
        gamingField
          .find("img")
          .last()
          .on("click", e => {
            point += 3;
            score.text(point + "");
            $(e.target).remove();
            if (gamingField.html() == "") clearInterval(idd);
          });
        break;
      case 2:
        gamingField
          .find("img")
          .last()
          .on("click", e => {
            point += 2;
            score.text(point + "");
            $(e.target).remove();
            if (gamingField.html() == "") clearInterval(idd);
          });
        break;
      case 1:
        gamingField
          .find("img")
          .last()
          .on("click", e => {
            point += 1;
            score.text(point + "");
            $(e.target).remove();
            if (gamingField.html() == "") clearInterval(idd);
          });
        break;
    }
  }
}

function timer(time) {
  let timer = $(".timer mark");
  let minute = 0;
  let sec = time % 60;
  while (time > 60) {
    minute++;
    time -= 60;
  }
  idd = setInterval(() => {
    sec = sec > 9 ? sec : "0" + sec;
    timer.text(minute + ":" + sec);
    if (minute == 0 && sec == 0) {
      clearInterval(idd);
      gamingField.html("");
    }

    if (sec == 0) {
      minute--;
      sec = 59;
    }
    sec--;
  }, 1000);
}

function animate(imag, pos) {
  let u = 0;
  if (pos == "left") {
    id = setInterval(() => {
      u += 5;
      imag[0].style.marginLeft = u + "px";
      if (
        imag[0].getBoundingClientRect().right >=
        gamingField[0].getBoundingClientRect().right
      ) {
        console.log(1);
        gamingField.html("");
        clearInterval(idd);
      }
    }, 100);
  } else if (pos == "right") {
    id = setInterval(() => {
      u += 5;
      imag[0].style.marginRight = u + "px";
    }, 200);
  }
}
