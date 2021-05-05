<?php 
$tax = 10;

function sum($a, $b) {
    global $tax;
    $ret = ($a + $b) * ($tax / 100 + 1);
    return $ret;
}

$num1 = 10;
$num2 = 20;

$answer = sum($num1, $num2);
echo $answer;