<?php
// トレートTrait
trait Tax {
    // 消費税を返す
    public function getTax(): int {
        return 10;
    }
}

trait ForeignTax {
    public function getTax(): int {
        return 20;
    }
}

class Item {
    private int $price;
    use Tax, ForeignTax {
        Tax::getTax insteadOf ForeignTax; //foregintaxの代わりにtaxを使う
        ForeignTax::getTax as getForeginTax; //gettaxをgetforeintaxというメソッド名に変える
    }

}

class Service {
    private int $service_price;
    use Tax;
}

$item = new Item;
echo $item->getTax(), "\n";
echo $item->getForeginTax(), "\n";

$service = new Service;
echo $service->getTax(), "\n";