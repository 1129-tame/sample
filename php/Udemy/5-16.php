<?php
// インスタンスの複製
class Item {
    public string $nmae;
}

$item01 = new Item();
$item01->name = 'PHP入門';

// $item02 = $item01; // 参照,この状態だと値が変更された際に両方変化してしまう
$item02 = clone($item01); //その地点での値が引き渡される

$item01->name = 'JS入門';
echo $item01->name, $item02->name;