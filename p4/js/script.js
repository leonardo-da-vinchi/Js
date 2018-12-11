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

function scrolling() {
    if (this.pageYOffset >= checkElem) { 
        setTimeout(function(){
        this.scrollTo({
        top: scrollvalue,
        behavior: "smooth"
        });
        }, 500);
        
    }
 }

 let checkElem;
 let scrollvalue;

document.querySelector("form").addEventListener("input",function() {
checkElem = this.getBoundingClientRect().bottom + pageYOffset;
scrollvalue = checkElem - window.screen.height/2 - this.getBoundingClientRect().bottom/2 + this.getBoundingClientRect().top/2;
if (this.children[0].value && !this.children[1].value || this.children[1].value && !this.children[0].value) {
window.addEventListener("scroll", scrolling);
}
else {
 window.removeEventListener("scroll", scrolling);   
}
}); 


let parser = new UAParser(navigator.userAgent);
let browserName = parser.getBrowser().name;
let browserVersion = parser.getBrowser().version;
let browsers = ["Opera", "Chrome",  "Firefox"];
if (browsers.indexOf(browserName) != -1 && (+browserVersion.slice(0,2) > 40)) {
    alert(browserName);
}
else {
    let noneContent = document.querySelectorAll(".sec-3, .sec-4, .sec-5");
    for (let i = 0, length = noneContent.length; i < length; i++) {
        noneContent[i].style.display = "none";
    }
    document.querySelector(".sec-2").style.background = "white";
    document.querySelector(".sec-5 .laptop").style.top = "0";

}
