<?php
// // 日付を表示する関数オブジェクトなし 関連性が分かりづらい
// date_default_timezone_get('Asia/Tokyo');
// $today = time(); 
// $format_date = date('y/m/d', $today);
// echo $format_date;


//オブジェクト指向
$today = new DateTime(); //Datetimeのオブジェクトを作る 順番が決まっている Datetime = クラス $today=インスタンス
$today->setTimezone(new DateTimeZone('Asia/Tokyo')); //タイムゾーンのセット

$format_date = $today->format('Y/m/d');
echo $format_date;