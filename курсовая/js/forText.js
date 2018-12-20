let text = "";
let useText = "";
let linefeedSum = 0;

function formatText(text) {
  let useText = "";
  let CheckLineFeed;
  let lengthNewString;
  while (text.length > 57) {
    CheckLineFeed = false;
    for (let i = 0; i < 57; i++) {
      if (text[i] == "\n") {
        useText += text.slice(0, i + 1);
        text = text.slice(i + 1, text.length);
        CheckLineFeed = true;
        break;
      }
    }
    if (!CheckLineFeed) {
      lengthNewString = text.slice(0, 57).lastIndexOf(" ");
      useText += text.slice(0, lengthNewString) + "\n";
      text = text.slice(lengthNewString + 1, text.length);
    }
  }
  useText += text;
  return useText;
}

function getUseText(text) {
  let linePeekSum = 0;
  let searshPosition = 0;
  let checkFull = 0;
  let preventsearshPosition = 0;

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

function replaceUseText() {
  characterInBorder = 0;
  useText = getUseText(leftText);
  leftText = leftText.slice(useText.length, leftText.length);

  useText= useText.split("\n").join(" \n");
}

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
