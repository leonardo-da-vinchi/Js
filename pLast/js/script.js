let ulSticker = $("ul:nth-of-type(2)");
let stickerClone;
let stickerSize = {width: "0", height: "0"};
let stickerCoord = {top: "0", left: "0", bottom: "0", right: "0"};
let heightPlus;
let heightMinus;
let widthPlus;
let widthMinus;
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
           "width": stickerSize.width,
           "height": stickerSize.height,
           "z-index": "99",
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
            "position": "absolute",
            "top": getCoord(ui.helper[0]).top - getCoord(this).top,
            "left": getCoord(ui.helper[0]).left - getCoord(this).left
            });
            figureDrop.find("img:not(:last-child)").click(function(event) {
                $(event.target).css({
                    "box-sizing": "content-box",
                    "border": "1px dotted grey"});
                $(event.target).draggable({disabled: false});
                heightPlus = $("section ul input[name='height-plus'");
                heightMinus = $("section ul input[name='height-minus'");
                widthPlus = $("section ul input[name='width-plus'");
                widthMinus = $("section ul input[name='width-minus'");
                heightPlus.click(() => {
                    $(event.target).css({
                       "height": getSize(event.target).height + getSize(event.target).height*0.1 
                    });
                });
            }) 
        },
    })
    
    figureDrop.find("img:last-child").click(function(){
        let innerStickers = $(this.parentNode).find("img:not(:last-child)");
        innerStickers.draggable({disabled: true});
        innerStickers.css("border", "");

    })

    // figureDrop.find("img:not(:last-child)").draggable();




 function getSize(elem) {
    let width = elem.getBoundingClientRect().right - elem.getBoundingClientRect().left;
    let height = elem.getBoundingClientRect().bottom - elem.getBoundingClientRect().top;
    return {
        width: width,
        height: height
    }
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
        left: left
    }
}