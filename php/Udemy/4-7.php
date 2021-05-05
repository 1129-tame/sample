<?php
// 無名関数
// function sum(int $a, int $b): int {
//     return $a + $b;
// }

// 数字整形
function echo_price($callback) {
    echo number_format($callback(1000, 500)), '円';
}

// // クロージャー・無名関数,パラメーターをファンクションとして入れる。
// $get_sum = function ($a, $b) {
//     return $a + $b;
// };
// 関数を変数に代入

$get_sum = fn($a, $b) => $a + $b;

$sum = $get_sum(10, 35);
echo $sum;

// $sum = $get_sum(10, 15);
// echo $sum;
echo_price($get_sum);

function times(int $a) {
    $price = pow($a, 3);
    return $price;
}
$get_out = fn($b, $m) => pow($b, $m);
$n = $get_out(2,2);
echo $n;