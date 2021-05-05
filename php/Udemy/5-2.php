<?php
// クラスの作り方
class Item {
    // プロパティの宣言=変数の宣言
    public string $name; // 商品名 スコープ・型の定義
    public int $price; // 価格
}
//インスタンスを分けることによって、連想配列の様に要素の中身がわかりやすくなる
//連想配列との違いはメソッドがあること

// PHP入門
$php_basic = new Item(); //アイテムというクラスのインスタンスが入る
$php_basic->name = 'PHP入門';
$php_basic->price = 1500;

echo $php_basic->name, '/', $php_basic->price;

// JS入門
$js_basic = new Item();
$js_basic->name = 'JS入門';
$js_basic->price = 2300;