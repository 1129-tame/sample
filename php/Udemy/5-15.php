<?php
// 静的メソッド・静的プロパティ
class Item {
    public static int $tax = 10; // 消費税

    public static function getTax(): int {
        // return $this->tax; //静的メソッドの中では$thisは使えない
        return self::$tax;
    }
}

// インスタンスを作ってメソッドを呼び出す必要がある
// $item = new Item();
// echo $item->getTax();

// 静的メソッドは以下の様に呼び出せる
// echo Item::getTax();

echo Item::$tax, "\n";
Item::$tax = 8; //クラスの値が上書きされる

$item02 = new Item();
echo $item02->getTax();