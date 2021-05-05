<?php 
declare(strict_types=1); //型の厳密化
$tax = 10;
//型宣言のメリット＝エラーのわかりやすさ
function sum(int $a, int $b): int{
    global $tax;
    $ret = ($a + $b) * ($tax / 100 + 1);
    return $ret;
}

$num1 = '100';
$num2 = 200;

$answer = sum($num1, $num2);
echo $answer;