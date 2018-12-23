let dbx = $(".drop-area");

$(function() {
  dbx.on("dragover", prevent);
  dbx.on("dragenter", prevent);
  dbx.on("drop", drop);
});

let drop = e => {
  prevent(e);
  const { files } = e.originalEvent.dataTransfer;
  handleFiles(files);
};

let prevent = e => {
  e.preventDefault();
  e.stopPropagation();
};

let handleFiles = files => {
  let file = files[0];

  if (file.type.slice(0, 5) == "image") {
    if (file.size / 1024 >= 700) {
      alert("Image size must be less than 700KB");
      return 0;
    }
    let img = $("<img>");
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function() {
      img.attr("src", reader.result);
    };

    $("body").append(img);
    let imgForData = $("body img").last();
    let width = 0;
    imgForData.load(() => {
      width = getSize(imgForData).width;
      imgForData.remove();
      if (width < 1000) {
        figureDrop.children().remove();
        figureDrop.append(img);
        startSettingsForMainImage();
      } else {
        alert("Image width must be less than 1000px");
      }
    });
  } else {
    alert("Type loaded file must be IMAGE");
  }
};
