let funcForRandom = function(number, array, nowText) {
    do {
        number = Math.floor(Math.random() * array.length);
      } while (array[number] == nowText);
      return array[number];
}