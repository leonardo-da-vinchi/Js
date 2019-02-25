<?php 
require_once FileWay::getFileway().'engine/abstracts/abstractContent.php';
require_once FileWay::getFileway().'engine/identy/identyRender.php';
require_once FileWay::getFileway().'engine/traits/writeToFileTrait.php';

class View extends Content implements Render
{
    use writingToFile;
    public function __construct($content = null) {
        if (is_null($content)||$content == '')
        die('<p style="text-align: center; margin-top: 30px; color: red; font-size: 24px">Erorr: не переданы данные для страницы</p>');
        $this->content=$content;
    }

    public function render($fileway) {
         $headerWay = $fileway.'source/header/header.php';
         $footerWay = $fileway.'source/footer/footr.php';

          if (file_exists($headerWay)&&file_exists($footerWay)){
               require $headerWay;
               echo "<main>$this->content</main>";
               require $footerWay;
          } else {
               echo "<p style='text-align: center'>Something wrong :( <br> (check log)</p>";
          $errMess = file_exists($headerWay)? 'File footer.php is not found': 'File header.php is not found';
          try {
               throw new Exception($errMess); 
          } catch(Exception $e) {
               $this->writeError($e->getMessage());
           }
          }
    }
}