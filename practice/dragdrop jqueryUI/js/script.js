
let div = $("div").draggable({
    axis: "x",
    start: function(event, ui) {
    ui.helper.css("border", "solid 1px grey")},
    stop: function(event, ui) {
        ui.helper.css("border", "")
        }
});

console.log($("div").position())



// let preventContent;
// let preventBackground;
// let colorBackRand;
// let divDragClone;
// let i = 0;;
// let divDrag = $("div").draggable({
//         distance: 10,
//         start: function() {
//         preventContent = $(this).find('p').html();
//         $(this).css({"z-index": "1000",
//                      "position": "absolute"})},
//         stop: function() {
//             $(this).find("p").html(preventContent);
//             $(this).css("position", "static");},
//         drag: function() {
//             let x = this.getBoundingClientRect().right - (this.getBoundingClientRect().right - this.getBoundingClientRect().left)/2;
//             let y = this.getBoundingClientRect().bottom - (this.getBoundingClientRect().bottom - this.getBoundingClientRect().top)/2;
//             $(this).find('p').html("X: " + x + "; " + "Y: " + y)},
//     });

// $("section:last-child").droppable(
// { 
// deactivate: function() {
//     $(this).css("background", 'rgb(255,152,152,1)');},
// out: function() {
//     $(this).css("background", 'rgb(255,152,152,1)');},
// over:  function() {
//     $(this).css("background", 'rgb(255,152,152,0.8)');},
// drop: function() {
//     divDragClone = divDrag.clone();
//     $(this).append(divDragClone);
//     colorBackRand = "rgb(" + Math.floor(Math.random()*255) + 
//     ", " + Math.floor(Math.random()*255) + 
//     ", " + Math.floor(Math.random()*255) + ")";
//     divDragClone.css({"position": "static",
//                       "z-index" : "0"});
//     divDrag.css("background", colorBackRand);
//     divDragClone.find("p").html(preventContent + " " + (++i));
// }
// });


