<?php
 trait writingToFile {
    private $fileWay;

    private function writeError($e) {
        $this->fileWay = FileWay::getFileway().'log/errorLog.txt';
        if (file_exists($this->fileWay))
            $f = fopen($this->fileWay, 'a');
        else 
            $f = fopen($this->fileWay, 'w');
        
        fwrite($f, "Error: $e, Date: ".date('d.m.Y h:i:s A')."\n");
        fclose($f);
    }
}