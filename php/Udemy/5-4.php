<?php
// クラスの作り方 // コンストラクターの作り方
class Item {
    public string $name; // 商品名 プロパティの宣言
    public int $price; // 価格

    //コンストラクター 初期値として値を設定する際に使用、ここで定義するとアイテムの表示の際に値を入れれば良くなる
    // コンストラクターはpublicにする必要がある
    public function __construct(string $name, int $price) {
        $this->name = $name; //初期値が値に入る
        $this->price = $price; //初期値が値に入る
    } 
    //価格を取得する
    public function getPrice(string $end = '') {
        return number_format($this->price) . $end;
    }
    // $this = 自分自身　呼び出したインスタンス自身を指す
}
//インスタンスを分けることによって、連想配列の用に要素の中身がわかりやすくなる
//連想配列との違いはメソッドがあること
// PHP入門
$php_basic = new Item('PHP入門', '2400'); //アイテムというクラスのインスタンスが入る
// $php_basic->name = 'PHP入門';
// $php_basic->price = 15000000;

echo $php_basic->name, '/', $php_basic->getPrice('円'), "\n";

// JS入門
$js_basic = new Item('JS入門', '2300');
// $js_basic->name = 'JS入門';
// $js_basic->price = 2500;

echo $js_basic->name, '/',  $js_basic->getPrice('円');