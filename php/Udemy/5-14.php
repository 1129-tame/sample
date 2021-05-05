<?php
// 5-14 マジックメソッド
class Item {
    private string $name;
    private int $price;

    public function __construct($name, $price) {
        $this->name = $name;
        $this->price = $price;
    }

    // インスタンスを画面出力した際に自動的に呼び出されるマジックメソッド
    public function __toString() {
        return $this->name . ' / ' . number_format($this->price) . '円';
    }
}

$item = new Item('PHP入門', 1500);
echo $item;