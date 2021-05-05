<?php
// クラスの作り方
class Item {
    public string $name; // 商品名 プロパティの宣言
    public int $price; // 価格

    //価格を取得する
    public function getPrice(string $end = '') {
        return number_format($this->price) . $end;
    }
    // $this = 自分自身 呼び出したインスタンス自身を指す
}
//インスタンスを分けることによって、連想配列の用に要素の中身がわかりやすくなる
//連想配列との違いはメソッドがあること
// PHP入門
$php_basic = new Item('phpnyuumonn', '243'); //アイテムというクラスのインスタンスが入る
$php_basic->name = 'PHP入門';
$php_basic->price = 15000000;

echo $php_basic->name, '/', $php_basic->getPrice('円');

// JS入門
$js_basic = new Item('a', '1');
$js_basic->name = 'JS入門';
$js_basic->price = 2300;

echo $js_basic->getPrice('円');