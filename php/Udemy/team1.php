<?php
$array = [1, 0, 5];
for ($i=0; $i <29; $i++) {
    $array2 = array_sum($array);
array_shift($array);
array_push($array, $array2);
// print_r($array);
}
echo $array2 . "\n";
// $array2 = array_sum($array);
// echo $array2;
// array_shift($array);
// array_push($array, $array2);
// print_r($array);
