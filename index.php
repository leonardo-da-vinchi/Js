<?php

// $fileway = str_replace('\\', '/', substr(__DIR__, 0, 
// strpos(__DIR__,'\\', 
//  strpos(__DIR__, 'domains\\') + strlen('domains\\') + 1) + 1));
$folderBegin = strpos(__FILE__, 'domains\\') + strlen('domains\\');
$folderWork = substr(__FILE__, $folderBegin, 
   strlen(__FILE__)-strpos(__FILE__, '\\',$folderBegin + 1)-3);


$directory = explode('\\' , __DIR__);
$directory = $directory[sizeof($directory)-1];
switch ($directory) {
    case $folderWork:
    $fileway = '';
    break;
    case 'source':
    $fileway = '../';
    break;
    case 'header':
    case 'footer':
    $fileway = '../../';
    break;
    default:
    die('Испольняесый файл находится в некорректной дериктории');
}

require $fileway.'source/classes/View.php';
header('Content-Type: text/html; charset=utf-8');

$page = new View('lol kek cheburek uzbek bishkek kumek parsec lulek');
$page->render($fileway);






// 10.	Реализуйте класс View, который создаёт страницу для пользователя. 
// В нём создать конструктор, принимающий данные для страницы
//  (если они не переданы, то прерывается выполнение скрипта),
// метод render создаёт страницу путём последовательного включения шапки, 
// тела документа (переданный параметр данных из конструктора), и подвала. 
// Причём статический контент находится в каталогах с соот. именем и 
// метод должен работать в независимости от точки входа. 