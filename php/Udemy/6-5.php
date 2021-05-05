<?php
//二次元配列・連想配列
// $items = [
//     [
//         'name' => 'PHP入門',
//         'price' => 1500, 
//     ],
//     [
//         'name' => 'JS入門',
//         'price' => 2000,
//     ],
//     [
//         'name' => 'Python入門',
//         'price' => 1800,
//     ]
//     ];

//     $json = json_encode($items, JSON_UNESCAPED_UNICODE); //json化する、日本語をエスケープ化しない
//     file_put_contents('data/items.json', $json);

//JSONの読み込み
$json = file_get_contents('data/items.json');
$items = json_decode($json); //jsonファイルを配列化
print_r($items);