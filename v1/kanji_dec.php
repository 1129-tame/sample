<?php
// 文字コード設定
header('Content-Type: application/json; charset=UTF-8');

// numが存在するかつnumが数字のみで構成されているか
if(isset($_GET["num"]) && !preg_match('/[^0-9]/', $_GET["num"])) {
    // numをエスケープ(xss対策)
    $param = htmlspecialchars($_GET["num"]);
    // メイン処理
    $arr["status"] = "yes";
    $arr["x114"] = (string)((int)$param * 114); // 114倍
    $arr["x514"] = (string)((int)$param * 514); // 514倍
} else {
    // paramの値が不適ならstatusをnoにしてプログラム終了
    $arr["status"] = "no";
}

// 配列をjson形式にデコードして出力, 第二引数は、整形するためのオプション
print json_encode($arr, JSON_PRETTY_PRINT);

function kansujiEncoding ($num)
{
    $num     = (int)$num;
    $kansuji = '';

    if ($num === 0) {
        return '零';
    }

    $valueNum = strlen($num);
    echo "$valueNum\n";
    $whileNum = 0;

    while ($valueNum) {
        $whileNum++;

        // 桁
        switch ($whileNum) {
        case 2:
            $kansuji = '十' . $kansuji;
            break;
        case 3:
            $kansuji = '百' . $kansuji;
            break;
        case 4:
            $kansuji = '千' . $kansuji;
            break;
        case 5:
            $kansuji = '万' . $kansuji;
            break;
        case 6:
            $kansuji = '十' . $kansuji;
            break;
        case 7:
            $kansuji = '百' . $kansuji;
            break;
        case 8:
            $kansuji = '千' . $kansuji;
            break;
        case 9:
            $kansuji = '億' . $kansuji;
            break;
        case 10:
            return $kansuji;
            break;
        }
        $substrNum = (int)mb_substr($num, $valueNum -1, 1);

        if ($substrNum === 1 && $whileNum === 1) {
            $kansuji = '一';
        }

        // 数
        switch ($substrNum) {
        case 2:
            $kansuji = '二' . $kansuji;
            break;
        case 3:
            $kansuji = '三' . $kansuji;
            break;
        case 4:
            $kansuji = '四' . $kansuji;
            break;
        case 5:
            $kansuji = '五' . $kansuji;
            break;
        case 6:
            $kansuji = '六' . $kansuji;
            break;
        case 7:
            $kansuji = '七' . $kansuji;
            break;
        case 8:
            $kansuji = '八' . $kansuji;
            break;
        case 9:
            $kansuji = '九' . $kansuji;
            break;
        }

        $valueNum--;
    }

    return $kansuji;
}

$num = rand(0, 99999999);

$kansuji = kansujiEncoding($num);

var_dump($num);
var_dump($kansuji);