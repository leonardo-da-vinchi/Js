let choozen = document.querySelector(".sec-3 .choose-section");
let imgForChoozen = document.querySelectorAll(".sec-3 .section-items li>img");
let textForChoozen = document.querySelectorAll(".sec-3 .section-items li a span");

choozen.onclick = function(event) {
    this.querySelector(".selected").classList.remove("selected");
    let chooseElem = event.target.closest("li");
    chooseElem.classList.add("selected");
    let imgName = "img/" +chooseElem.classList[0] + "-img.jpg";
    let textList = chooseElem.innerHTML + " listing one";
    for (let i = 0; i < 3; i++){
        imgForChoozen[i].src = imgName;
        textForChoozen[i].innerHTML = textList;
    }
    
}