<?php 
// 4. Создайте класс FunnyFace – обеспечивающий поля и методы для обработки изображения
//         (загрузка с клиента не требуется – просто указывается локальный путь к файлу),
//         внешней консольной утилитой и возвращающее пользователю обработанное изображение
//         (утилиту для win приложить).


header('Content-type:image/gif');

$img = new FunnyFace('examples\example.png');

$img->lookDown(); // Переворачивает изображение
// $img->reMirror(); // Меняет горизонтально половинчатые куски изображения местами
// $img->autoCorrect(); // Делает автокоренкцию цветовых уровней изображения
                        // (чтобы эффект был заметен, сравните с исходным изображением)


class FunnyFace 
{
    private $url;

    public function __construct($url) {
        $this->url = $url;
    }

    public function reMirror(){
        passthru("convert  $this->url -roll -350  -");
    }

    public function lookDown() {
        passthru("convert  $this->url -rotate 180  -");
    }

    public function autoCorrect() {
        passthru("convert  $this->url -auto-level  -");
    }

}

?>
