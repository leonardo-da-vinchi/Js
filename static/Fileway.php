<?php

 class FileWay {

    static public function getFileway() {
        $fileway = '';
        $searchPosition;
        $searchPosition = strpos(__FILE__, 'domains\\') + strlen('domains\\');
        while (strpos(__DIR__, '\\', $searchPosition)) {
          $fileway.='../';
          $searchPosition = strpos(__DIR__, '\\', $searchPosition) + 1;
        }
        $res = substr($fileway, 3);
        
        return $res ? $res : '';
    }
}
