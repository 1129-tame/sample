<?php //メソッドのオーバーライド
class Item {
    protected int $unit; // 個数 親クラス、継承クラスのみ使用可能

    public function __construct(int $unit) {
        $this->unit = $unit;
    }

    public function getUnit(): string {
        return $this->unit . '個';
    }
}
class Book extends Item { //子クラス
    private int $page;

    public function __construct(int $unit, int $page) { //初期値の設定
        parent::__construct($unit);
        $this->page = $page;
    }
    
        
    
    public function getUnit(): string { // 親クラスの効果を上書き
        return $this->unit . '冊';
    }
}

$eraser = new Item(10);
echo $eraser->getUnit(), "\n";

$book = new Book(5, 120);
echo $book->getUnit();