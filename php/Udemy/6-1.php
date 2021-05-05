<?php
// ファイルを書き込むオブジェクト
$file = new SplFileObject('data/log.txt', 'a'); //
$today = new DateTime();
$file->fwrite($today->format('Y-m-d H:i:s') . "\n");