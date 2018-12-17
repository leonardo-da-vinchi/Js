let i = 10;
let ulSticker = $("ul:nth-of-type(2)");
let stickerClone;
let innerStickers;
let stickerSize = { width: "0", height: "0" };
let stickerCoord = { top: "0", left: "0", bottom: "0", right: "0" };
let heightPlus = $("section ul input[name='height-plus'");
let heightMinus = $("section ul input[name='height-minus'");
let widthPlus = $("section ul input[name='width-plus'");
let widthMinus = $("section ul input[name='width-minus'");
let figureDrop = $("figure");
figureDrop.css("position", "relative");
ulSticker.find("img").draggable({
  scope: "firstStickers",
  helper: "clone",
  start: function(event, ui) {
    this.parentNode.parentNode.parentNode.style.zIndex = "102";
    stickerCoord.top = getCoord(this).top;
    stickerCoord.left = getCoord(this).left;
    stickerSize.width = getSize(this).width;
    stickerSize.height = getSize(this).height;
    ui.helper.css({
      width: stickerSize.width,
      height: stickerSize.height,
      "z-index": "99"
    });
  }
});

figureDrop.droppable({
  tolerance: "fit",
  scope: "firstStickers",
  drop: function(event, ui) {
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

// figureDrop.find("img:not(:last-child)").draggable();

function getSize(elem) {
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
