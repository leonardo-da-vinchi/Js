let text;
let useText = "";

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
  let textClone = text;
  let useText = "";
  let linePeekSum = 0;
  let searshPosition = 0;
  while (linePeekSum <= 4) {
      linePeekSum++;
      searshPosition += textClone.indexOf("/n");
      textClone = textClone.slice(textClone.indexOf("/n") + 1, textClone.length);
  }
  useText = text.slice(0, searshPosition + 1);
  return useText;
}
