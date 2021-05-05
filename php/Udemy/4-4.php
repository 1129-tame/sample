<?php

function make_list($list, $head = '・') {
    foreach ($list as $key => $val) {
        echo $head, $key, ':', $val, "\n";
    }
}

$pref = [
    'hokkaido' => '北海道',
    'aomori' => '青森県',
    'iwate' => '岩手県'
];

// make_list($pref, '!');

// $color = ['黒', '赤', '白'];
// array_shift($color); //リファレンス渡し
// print_r($color);
function add_head(&$target) {
    for ($i=0; $i<count($target); $i++) {
        $target[$i] = '・' . $target[$i];
    }
    $ttt = '黒';
    return $ttt;
}

$color = ['黒', '赤', '白'];
$a = add_head($color);
print_r($color);

print_r($a);