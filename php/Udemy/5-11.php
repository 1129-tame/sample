<?php
// スタンダードクラス
$book = new stdClass();
$book->name = 'PHP入門';
$book->price = 1500;

echo $book->name;

// 変数（あまり好ましくない）
$book_name = 'PHP入門';
$book_price = 1500;

echo "$book_name";

// 連想配列
$book = [
    'name' => 'PHP入門',
    'price' => 1500
];

echo $book['name'];