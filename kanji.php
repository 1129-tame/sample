<?php

$kanji = $_GET['kan'];
// $kanji = '壱千五百八拾参';
$kakeru = 1;
$sum = 0;
$last = 0;

// 桁ごとに配列化
$kanji_point = preg_replace('/(兆|億|万)/', '$1,', $kanji); // 弐億参百万=>弐億,参百万,
$kanji_array = explode(',', $kanji_point); //,を目印に配列

foreach ($kanji_array as $kan) {
    if (preg_match('/兆/', $kan)) {
        $count = 10000000000000;
    } elseif (preg_match('/億/', $kan)) {
        $count = 100000000;
    } elseif  (preg_match('/万/', $kan)) {
        $count = 10000;
    } else {
        $count = 1;
    }

    $kanji_num = preg_split("//u", trim($kan)); //一文字ずつ配列化
    
    foreach ($kanji_num as $val) {
        switch ($val) {
        case '壱':
            $kakeru *= 1;
            break;
        case '弐':
            $kakeru *= 2;
            break;
        case '参':
            $kakeru *= 3;
            break;
        case '四':
            $kakeru *= 4;
            break;
        case '五':
            $kakeru *= 5;
            break;
        case '六':
            $kakeru *= 6;
            break;
        case '七':
            $kakeru *= 7;
            break;
        case '八':
            $kakeru *= 8;
            break;
        case '九':
            $kakeru *= 9;
            break;
        // 千・百・拾が出てきたら初期化
        case '千':
            $kakeru *= 1000;
            $sum += $kakeru;
            $kakeru = 1;
            break;   
        case '百':
            $kakeru *= 100;
            $sum += $kakeru;
            $kakeru = 1;
            break;
        case '拾':
            $kakeru *= 10;
            $sum += $kakeru;
            $kakeru = 1;
            break;

        }
    }
    // var_dump($count);
    // var_dump($kakeru);
    // var_dump($sum);
    $last += $count * ($sum + $kakeru);
    

    // 値の初期化
    $kakeru = 1;
    $sum = 0;
    
}
echo "$last";

