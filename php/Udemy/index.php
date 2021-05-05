<?php
// $array = ['黒', '白', '赤', '黄'];

// $count = count($array);
// echo "$array[3]";

//while構文
// $q1 = 5;
// $q2 = 10;

// echo $q1, '+', $q2, 'は？ >';
// $answer = (int)trim(fgets(STDIN));

// while ($answer !== $q1 + $q2) {
//     echo 'はずれ。もう一回 >';
//     $answer = (int)trim(fgets(STDIN));
// }
// echo 'あたり！';

//do while1構文
// $dice = rand(1, 6);
// while ($dice !== 1) {
//     echo $dice, "\n";
//     $dice = rand(1, 6);
// }
// echo "$dice";
//最初に一度プログラムを動かす場合
// do {
//     $dice = rand(1, 6);
//     echo $dice, "\n";
// } while ($dice !== 1);

//処理の中断
// $color = ['黒', '白', '', '赤'];

// foreach ($color as $color_name) {
//     if ($color_name === '') {
//         // continue; //下の処理は実行しない
//         break; //繰り返し構文を終了
//     } 
//     echo $color_name, "\n";
// }

$scores = []; //変数を蓄積する配列

do {
    echo '点数を入力 >';
    $score = (int)trim(fgets(STDIN));
    if ($score === -1) {
        break;
    }

    array_push($scores, $score);
    $sum = 0;
    for ($i=0; $i<count($scores); $i++) {
        echo $i+1, '.', $scores[$i], "\n";
        $sum += $scores[$i];
    }

    echo '合計: ', $sum, "\n";

    $avg = $sum / count($scores);
    echo '平均: ', $avg, "\n";
} while($score !== -1);

