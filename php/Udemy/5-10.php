<?php 
// 抽象クラス・抽象メソッド
// 特徴：通常のクラスの様にプロパティも定義でき、約束事も決められる
abstract class Item {
    private $price;

    public function getPrice() {
        return $this->price;
    }

    // 抽象メソッド 約束事（インターフェースのような）
    abstract public function getUnit();
}

class Book extends Item {
    public function getUnit() {
        return '冊';
    }
}

class Pen extends Item {
    public function getUnit() {
        return '本';
    }
}

$book = new Book();
$book->getPrice();