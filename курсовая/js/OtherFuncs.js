let time = 0;
let charachtersForSpeed = 0;
let idTime;
let idSpeed;

let funcForRandom = function(array, nowText) {
  let number;
  do {
    number = Math.floor(Math.random() * array.length);
  } while (formatText(array[number]) == nowText);
  return array[number];
};

let TimeGo = function() {
  console.log(++time);
};

let getSpeedTyping = function(text, time) {
  let speed = Math.floor(((text.length - linefeedSum) / time) * 60);
  return speed;
};

let getStringMinuteFromSec = function(time) {
  let result = "";
  let timeNeed = time / 60;
  if (timeNeed == Math.floor(timeNeed)) {
    result = timeNeed + "";
    return result;
  }
  let int = Math.floor(timeNeed);
  let real = Math.round((timeNeed.toFixed(2) - int) * 60);

  real = real < 10 ? "0" + real : real;
  result = int;
  result += real ? ":" + real : "";
  return result;
};

let speedShowNow = function() {
  let result = charachtersForSpeed * randomIntFromDiapazon(25,35);
  charachtersForSpeed = 0;
  $(".speedValue").text(result);
};

let randomIntFromDiapazon = function(min, max) {
  let result = Math.floor(min+Math.random()*(max-min+1));
  return result;
}
