<?php
$pref = [
    'hokkaido' => '北海道',
    'aomori' => '青森県',
    'iwate' => '岩手県'
];

// foreach ($pref as $pref_code => $pref_name) {
//     echo '・', $pref_code, ':', $pref_name, "\n";
// }

$color = [
    'red' => '赤',
    'blue' => '青',
    'black' => '黒'
];

// foreach ($color as $color_code => $color_name) {
//     echo '・', $color_code, ':', $color_name, "\n";
// }

function array_fuc($ac) {
    foreach ($ac as $ac_code => $ac_name) {
        echo '・', $ac_code, ':', $ac_name, "\n";
    }
    return $ac;
}
array_fuc($pref);
array_fuc($color);
