
// // setInterval(function(){console.log(++time)}, 1000);
// // $(".statistic .now-record").text("oololo");
    //   $(".statistic .time").text(getStringMinuteFromSec(69));
// // alert(Math.ceil(1.1));
   $(".records-show-button").click(function() {
       $(this).css("display", "none");
       $(".records-list").css("display", "block");
       $(".button-close-list").click(function(){
        $(this.parentNode.parentNode).css("display", "none");
        $(".records-show-button").css("display", "block"); 
       })
   })


let writeRecords = function() {
if (localStorage.getItem("rus-ez")) {
    $(".rus-ez").text(localStorage.getItem("rus-ez") + " зн/мин")
} else {
    $(".rus-ez").text("отсутствует")
}

if (localStorage.getItem("rus-norm")) {
    $(".rus-norm").text(localStorage.getItem("rus-norm") + " зн/мин")
} else {
    $(".rus-norm").text("отсутствует")
}

if (localStorage.getItem("rus-hard")) {
    $(".rus-hard").text(localStorage.getItem("rus-hard") + " зн/мин")
} else {
    $(".rus-hard").text("отсутствует")
}

if (localStorage.getItem("eng-ez")) {
    $(".eng-ez").text(localStorage.getItem("eng-ez") + " зн/мин")
} else {
    $(".eng-ez").text("отсутствует")
}

if (localStorage.getItem("eng-norm")) {
    $(".eng-norm").text(localStorage.getItem("eng-norm") + " зн/мин")
} else {
    $(".eng-norm").text("отсутствует")
}

if (localStorage.getItem("eng-hard")) {
    $(".eng-hard").text(localStorage.getItem("eng-hard") + " зн/мин")
} else {
    $(".eng-hard").text("отсутствует")
}

}

writeRecords();

$(".clear-records").click(function(){
    localStorage.clear();
    writeRecords();
})

// alert(localStorage.getItem("rus-ez")>2082);


















