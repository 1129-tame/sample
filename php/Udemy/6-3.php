<?php
// フラグ＝説明
$file = new SplFileObject('data/items.csv');

// eof = End Of File
// while (!$file->eof()) {
//     $item = $file->fgetcsv();
//     echo $item[0], "\n";
// }

// フラグで処理する
$file->setFlags(SplFileObject::READ_CSV);
foreach ($file as $item) {
    echo $item[1], "\n";
}

