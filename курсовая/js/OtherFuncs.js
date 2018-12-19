let funcForRandom = function(array, nowText) {
  let number;
    do {
        number = Math.floor(Math.random() * array.length);
      } while (formatText(array[number]) == nowText);
      return array[number];
}