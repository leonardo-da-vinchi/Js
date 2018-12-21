let time = 0; // счетчик времени
let charachtersForSpeed = 0; // счетчик нажатых символов в опреденный интервал для выичсления скорости
let idTime; // идентификатор setInterval для счета времени
let idSpeed; // идентификатор setInterval для получения скорости


/**
 * Подбирает текст случайным образом так, чтобы он не повторялся за использованным в прошлый раз
 * 
 * @param {Array} array массив текстов, соответствующий выбранному режиму
 * @param {string} nowText перменная в которой хранится предыдущий используемый текст
 * @return {string} текст, который будет использован для ввода
 */
let funcForRandom = function(array, nowText) {
  let number;
  do {
    number = Math.floor(Math.random() * array.length);
  } while (formatText(array[number]) == nowText);
  return array[number];
};


/**
 * Осуществляет инкримент счетчика времени
 */
let TimeGo = function() {
  ++time;
};


/**
 * Вычисляет среднюю скорость на протяжении всего процесса ввода
 * 
 * @param {array} text текст, который мы получили случайным образом при выборе режима
 * @param {number} time время, за которое мы набрали данный текст
 * @return {number} средняя скорость ввода
 */
let getSpeedTyping = function(text, time) {
  let speed = Math.round(((text.length - linefeedSum) / time) * 60);
  return speed;
};



/**
 * Преобразует секунды в минуты
 * 
 * @param {number} time секунды
 * @return {number} минуты
 */
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



/**
 * Показывает текущую скорость
 */
let speedShowNow = function() {
  let result = charachtersForSpeed * randomIntFromDiapazon(25,35);
  charachtersForSpeed = 0;
  $(".speedValue").text(result);
};


/**
 * Возвращает случайное число в указанном диапазоне
 * 
 * @param {number} min 
 * @param {number} max 
 * @return {number} случайное число от min до max
 */
let randomIntFromDiapazon = function(min, max) {
  let result = Math.floor(min+Math.random()*(max-min+1));
  return result;
}

/**
 * Функция, позволяющая быстро проходить текущую  сессию тренировки(для тестов)
 */
let Cheet = function() {
  $("body").click(function() {
    characterInBorder = useText.length-3;
  });
}
