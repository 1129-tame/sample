<?php
require_once 'functions.php';

if (!isset($_POST['age'])) {
    echo '年齢が入力されていません。<br>';
    exit;
} 

if (($_POST['age'] <= 80) && (0 <= $_POST['age'])) {
    $age = $_POST['age'];
} else {
    echo "正しい年齢を入力してください";
    exit;
}

if(!isset($_POST['cs'])) {
    echo '性別が選択されていません。<br>';
    exit;
} else {
    $man = $_POST['cs'];
}

    echo '年齢：' .str2html($age) . '<br>';
    echo '性別：' . "$man" . '<br>';
    if ($man === '男性') {
        $life_time = 81 - $age ;
    } elseif ($man === '女性')  {
        $life_time = 87 - $age;
    } else {
        $life_time = 84 - $age;
    }
    $life_date = $life_time * 365;

if (isset($_POST['cs']) and isset($_POST['age'])) {
    echo "あなたの人生の残り日数は平均して" . $life_date . "日です。";
} else {
    echo "診断できませんでした。";
    exit;
}