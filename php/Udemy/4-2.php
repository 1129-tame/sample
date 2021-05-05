<?php 
$price = number_format(1000);

echo $price;
//可変パラメーター、... 配列化
function sum($param, ...$numbers) {
    $answer = 0;
    foreach ($numbers as $num) {
        $answer += $num;
    }
    return $answer;
}

$item_sum = sum(10, 20, 30, 40);
echo $item_sum;

