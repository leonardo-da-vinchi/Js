<?php 
require_once FileWay::getFileway().'engine/abstracts/abstractContent.php';
require_once FileWay::getFileway().'engine/identy/identyRender.php';

class View extends Content implements Render
{
    public function __construct($content = null) {
        if (is_null($content)||$content == '')
        die('<p style="text-align: center; margin-top: 30px; color: red; font-size: 24px">Erorr: не переданы данные для страницы</p>');
        $this->content=$content;
    }

    public function render($fileway) {
        require $fileway.'source/header/header.php';
        echo "<main>$this->content</main>";
        require $fileway.'source/footer/footer.php';
    }
}