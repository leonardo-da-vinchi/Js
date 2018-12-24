let i = 10;
let ulSticker = $("menu ul:not(:first-child)");
let stickerClone;
let innerStickers;
let stickerSize = { width: "0", height: "0" };
let stickerCoord = { top: "0", left: "0", bottom: "0", right: "0" };
let heightPlus = $("section ul input[name='height-plus']");
let heightMinus = $("section ul input[name='height-minus']");
let widthPlus = $("section ul input[name='width-plus']");
let widthMinus = $("section ul input[name='width-minus']");
let print = $("section ul input[name='print']");
let figureDrop = $("figure");
let printField;
let elemClone;
let checkDrop;
let stickerButton = $("input[name='sticker']");
let spoilerButton = $("input[name='spoiler']");
let rimsButton = $("input[name='rims']");
$("ul:nth-of-type(3)").css("display", "none");
$("ul:nth-of-type(4)").css("display", "none");
figureDrop.css("position", "relative");
$(ulSticker[0].parentNode).css("z-index", "102");

startSettingsForMainImage();


stickerButton.click(() => {
  $("ul:nth-of-type(2)").css("display", "block");
  $("ul:nth-of-type(3)").css("display", "none");
  $("ul:nth-of-type(4)").css("display", "none");
})

spoilerButton.click(() => {
  $("ul:nth-of-type(2)").css("display", "none");
  $("ul:nth-of-type(3)").css("display", "block");
  $("ul:nth-of-type(4)").css("display", "none");
})

rimsButton.click(() => {
  $("ul:nth-of-type(2)").css("display", "none");
  $("ul:nth-of-type(3)").css("display", "none");
  $("ul:nth-of-type(4)").css("display", "block");
})



print.click(() => {
  printField = figureDrop.clone();
  printField
    .find("img")
    .last()
    .css({
      width: getSize(figureDrop).width + "px",
      height: getSize(figureDrop).height + "px"
    });
  $("body>*").css("display", "none");
  $("body").append(printField);
  $("body").load(window.print());
  printField.remove();
  $("body>*").css("display", "flex");
  $("body>menu").css("display", "block");
});
ulSticker.find("img").draggable({
  scope: "firstStickers",
  helper: "clone",
  start: function(event, ui) {
    stickerCoord.top = getCoord(this).top;
    stickerCoord.left = getCoord(this).left;
    stickerSize.width = getSize(this).width;
    stickerSize.height = getSize(this).height;
    ui.helper.css({
      width: stickerSize.width,
      height: stickerSize.height,
      "z-index": "99"
    });
    elemClone = $(this);
    elemClone.css("display", "none");
    checkDrop = false;
  },
  stop: function() {
    if (!checkDrop){
    elemClone.css("display", "inline");
    }
  }
});

figureDrop.droppable({
  tolerance: "fit",
  scope: "firstStickers",
  drop: function(event, ui) {
    checkDrop = true;
    elemClone.css("display", "none");
    stickerClone = ui.helper.clone();
    $(this).prepend(stickerClone);
    stickerClone.css({
      position: "absolute",
      top: getCoord(ui.helper[0]).top - getCoord(this).top,
      left: getCoord(ui.helper[0]).left - getCoord(this).left,
      "z-index": i++
    });

    figureDrop.find("img:not(:last-child)").click(function(event) {
      innerStickers = $(this.parentNode).find("img:not(:last-child)");
      innerStickers.draggable({ disabled: true });
      innerStickers.css("border", "");
      heightPlus.off("click");
      heightMinus.off("click");
      widthPlus.off("click");
      widthMinus.off("click");
      $("body").off("keydown");
      $(event.target).css({
        "box-sizing": "content-box",
        border: "1px dotted grey"
      });
      $(event.target).draggable({
        disabled: false,
        start: function() {
          stickerCoord.preventTop =
            getCoord(this).top - getCoord(this.parentNode).top;
          stickerCoord.preventLeft =
            getCoord(this).left - getCoord(this.parentNode).left;
        },
        stop: function() {
          stickerCoord.top = getCoord(this).top - getCoord(this.parentNode).top;
          stickerCoord.bottom =
            getCoord(this.parentNode).bottom - getCoord(this).bottom;
          stickerCoord.left =
            getCoord(this).left - getCoord(this.parentNode).left;
          stickerCoord.right =
            getCoord(this.parentNode).right - getCoord(this).right;
          if (
            stickerCoord.top < 0 ||
            stickerCoord.bottom < 0 ||
            stickerCoord.right < 0 ||
            stickerCoord.left < 0
          ) {
            $(this).css({
              top: stickerCoord.preventTop,
              left: stickerCoord.preventLeft
            });
          }
        }
      });

      $("body").on("keydown", e => {
        stickerCoord.top = getCoord(this).top - getCoord(this.parentNode).top;
        stickerCoord.bottom =
          getCoord(this.parentNode).bottom - getCoord(this).bottom;
        stickerCoord.left =
          getCoord(this).left - getCoord(this.parentNode).left;
        stickerCoord.right =
          getCoord(this.parentNode).right - getCoord(this).right;
        console.log("top: " + stickerCoord.top);
        console.log("bottom: " + stickerCoord.bottom);
        console.log("left: " + stickerCoord.left);
        console.log("right: " + stickerCoord.right);

        switch (e.keyCode) {
          case 87:
            $(event.target).css({
              top: stickerCoord.top >= 5 ? +stickerCoord.top - 5 : 0
            });
            break;

          case 83:
            $(event.target).css({
              top:
                stickerCoord.bottom >= 5
                  ? +stickerCoord.top + 5
                  : getSize(this.parentNode).height - getSize(this).height
            });
            break;

          case 65:
            $(event.target).css({
              left: stickerCoord.left >= 5 ? +stickerCoord.left - 5 : 0
            });
            break;

          case 68:
            $(event.target).css({
              left:
                stickerCoord.right >= 5
                  ? +stickerCoord.left + 5
                  : getSize(this.parentNode).width - getSize(this).width
            });
            break;
        }

        e.stopPropagation();
      });

      heightPlus.on("click", () => {
        $(event.target).css({
          height: getSize(event.target).height + 5
        });
      });

      heightMinus.on("click", () => {
        $(event.target).css({
          height: getSize(event.target).height - 5
        });
      });

      widthMinus.on("click", () => {
        $(event.target).css({
          width: getSize(event.target).width - 5
        });
      });

      widthPlus.on("click", () => {
        $(event.target).css({
          width: getSize(event.target).width + 5
        });
      });
    });
  }
});

function startSettingsForMainImage() {
  figureDrop.find("img:last-child").click(function() {
    innerStickers = $(this.parentNode).find("img:not(:last-child)");
    innerStickers.draggable({ disabled: true });
    innerStickers.css("border", "");
    heightPlus.off("click");
    heightMinus.off("click");
    widthPlus.off("click");
    widthMinus.off("click");
    $("body").off("keydown");
  });
}

function getSize(elem) {
  if (elem instanceof jQuery) {
    elem = elem[0];
  }
  let width =
    elem.getBoundingClientRect().right - elem.getBoundingClientRect().left;
  let height =
    elem.getBoundingClientRect().bottom - elem.getBoundingClientRect().top;
  return {
    width: width,
    height: height
  };
}

function getCoord(elem) {
  if (elem instanceof jQuery) {
    elem = elem[0];
  }
  let top = elem.getBoundingClientRect().top + pageYOffset;
  let bottom = elem.getBoundingClientRect().bottom + pageYOffset;
  let right = elem.getBoundingClientRect().right + pageXOffset;
  let left = elem.getBoundingClientRect().left + pageXOffset;
  return {
    top: top,
    bottom: bottom,
    right: right,
    left: left,
    preventTop: 0,
    preventLeft: 0
  };
}
