<?php
// 6-6 例外処理
try {
    $file = new SplFileObject('notfound/log.txt', 'w');
} catch (Exception $exception) {
    // echo 'ファイルを作成できませんでした';
    // exit();

    die('ファイルを作成できませんでした!');
}

$file->fwrite('ログです');