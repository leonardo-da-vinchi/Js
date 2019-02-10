<?php 

class View
{
    private $content;

    public function __construct($content = null) {
        if (is_null($content)||$content == '')
        die('Erorr: не переданы данные для страницы');
        $this->content=$content;
    }

    public function render() {
        require 'source/header/header.php';
        echo "<main>$this->content</main>";
        require 'source/footer/footer.php';
    }
}