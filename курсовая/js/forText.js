let text = ""; // полученный при выборе режима случайный текст
let useText = ""; // отображаемый на данный момент фрагмент текста
let linefeedSum = 0; // сумма всех переносов строки в отфарматированном тексте


/**
 * Форматирует текст так, чтобы было легче обрабатывать его
 * 
 * @param {string} text форматируемый текст
 * @return {string} отфарматированный текст
 */
function formatText(text) {
  let useText = "";
  let CheckLineFeed;
  let lengthNewString;
  while (text.length > 57) { // пока текст не меньше указанного нам объема, устанавливаем переносы на следующую строку в нужных местах
    CheckLineFeed = false;
    for (let i = 0; i < 57; i++) { // ищем "родной" перенос строки
      if (text[i] == "\n") {
        useText += text.slice(0, i + 1);
        text = text.slice(i + 1, text.length);
        CheckLineFeed = true;
        break;
      }
    }
    if (!CheckLineFeed) {  // при не нахождении родного переноса строки сами вставляем его вместо ближайшего с конца строки пробела
      lengthNewString = text.slice(0, 57).lastIndexOf(" ");
      useText += text.slice(0, lengthNewString) + "\n";
      text = text.slice(lengthNewString + 1, text.length);
    }
  }
  useText += text; // оставшийся кусок, меньше заданного нами объема вставляем в конец, т.е. последню строку текста
  return useText;
}


/**
 * Получаем из отформатированного текста тот фрагмент, который можем отобразить
 * 
 * @param {string} text отформатированный начальный текст, полученный случайным образом 
 * @return {string} нужный нам фрагмент текста
 */
function getUseText(text) {
  let linePeekSum = 0; // счетчик переноса строки
  let searshPosition = 0; // позиция, на которой будет заканчиваться нужный нам текст
  let checkFull = 0; // счетчик, проверящий, не меньше ли текст возможно отображаемого
  let preventsearshPosition = 0; // позиция, полученная в предыдущей итерации

  while (linePeekSum < 4) {
    linePeekSum++;
    searshPosition =
      text.indexOf("\n", searshPosition + 1) + 1
        ? text.indexOf("\n", searshPosition + 1)
        : searshPosition;
    if (searshPosition > 0 && searshPosition != preventsearshPosition) {
      checkFull++;
    }
    preventsearshPosition = searshPosition;
  }
  useText = checkFull == 4 ? text.slice(0, searshPosition + 1) : text;
  return useText;
}


/**
 * Переносим каретку текущего символа в начало отображаемого фрагмента;
 * заменяет текущий фрагмент на следующий, получив его из оставшегося текста;
 * изменяем оставлшийся текст
 */
function replaceUseText() {
  characterInBorder = 0;
  useText = getUseText(leftText);
  leftText = leftText.slice(useText.length, leftText.length);

  useText= useText.split("\n").join(" \n");
}


/**
 * Возвращает сумму всех вхождений подстроки в строку
 * 
 * @param {string} str строка, в которой мы будем искать вхождения
 * @param {string} target подстрока, чьи вхождения мы будем искать
 * @return {number} количество всех вхождений
 */
function searshAllEntry(str, target) {
  let pos = 0;
  let foundPos;
  let sum = 0;
  while (true) {
    foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    pos = foundPos + 1;
    sum++;
  }
  return sum;
}
