<?php
// クラスの作り方 // コンストラクターの作り方
class Item {
    public string $name; // 商品名 プロパティの宣言
    private int $price; // 価格

    //コンストラクター 初期値として値を設定する際に使用、ここで定義するとアイテムの表示の際に値を入れれば良くなる
    //プロパティは直接いじることはよくない
    public function __construct(string $name, int $price) {
        $this->name = $name;
        $this->price = $price;
    } 

    // 価格を設定する
    public function setPrice(int $price) {
        if ($price < 0) {
            return false; //setPriceが無効となる
        }
        $this->price = $price;
        return true; //値が上書きされる
    }

    //価格を取得する
    public function getPrice(string $end = '') {
        return number_format($this->price) . $end;
    }
    // $this = 自分自身 呼び出したインスタンス自身を指す
}
//インスタンスを分けることによって、連想配列の用に要素の中身がわかりやすくなる
//連想配列との違いはメソッドがあること
// PHP入門
$php_basic = new Item('PHP入門', '2400'); //アイテムというクラスのインスタンスが入る
// $php_basic->price = 200; //プライヴェートにすると設定できなくなる
$php_basic->setPrice(1500); //メソッドを通じて値を代入

echo $php_basic->name, '/', $php_basic->getPrice('円');

// JS入門
$js_basic = new Item('JS入門', '2300');

echo $js_basic->getPrice('円');