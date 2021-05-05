<?php
// 5-9 インターフェイス
interface ItemInterface {
    public function getPrice(): int;
}
// ItemInterfaceを実装
class Book implements ItemInterface {
    private int $price;
    public function getPrice(): int {
        return $this->price;
    }
}
// ItemInterfaceを実装 GetPriceを必ず使えという命令
class Pencil implements ItemInterface {
    private int $price;
    public function getPrice(): int {
        return $this->price;
    }
}