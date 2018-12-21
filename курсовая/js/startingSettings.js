
  /**
   * Назначаем обработчик клика на кнопку "Рекорды", при котором  нам показывается список рекордов;
   * назначаем на кнопку в виде крестика событие нажатия, при котором
   * список закрывается
   */
  
  $(".records-show-button").click(function() {
       $(this).css("display", "none");
       $(".records-list").css("display", "block");
       $(".button-close-list").click(function(){
        $(this.parentNode.parentNode).css("display", "none");
        $(".records-show-button").css("display", "block"); 
       })
   })


/**
 * Заполняет список рекордов в зависимости от хранящихся на localStarage
 * данных о них
 */   
let writeRecords = function() {
if (localStorage.getItem("rus-ez")) { //если элемент не пустой, записываем его значение в таблицу
    $(".rus-ez").text(localStorage.getItem("rus-ez") + " зн/мин")
} else { // иначе указываем на отсутствие записи
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

/**
 * Назначем обработчик клика на кнопку "Очистить" в списке рекордов
 * очищающая данные, хранящиеся на localStorage и обновляющая список рекордов
 */

$(".clear-records").click(function(){
    localStorage.clear();
    writeRecords();
})
