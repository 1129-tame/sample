<?php //メソッドのオーバーライド
class Item {
    protected int $unit; // 個数 親クラス、継承クラスのみ使用可能 privateだと継承クラスでも使えない

    public function __construct(int $unit) {
        $this->unit = $unit;
    }

    public function getUnit(): string {
        return $this->unit . '個';
    }
}
class Book extends Item { //子クラス
    public function getUnit(): string { // 親クラスの効果を上書き
        return $this->unit . '冊';
    }
}

$eraser = new Item(10);
echo $eraser->getUnit(), "\n";

$book = new Book(5);
echo $book->getUnit();