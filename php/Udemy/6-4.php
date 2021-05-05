<?php
$items = simplexml_load_file('data/items.xml');
foreach ($items as $item) {
    echo $item->name, ' / ', number_format((float)$item->price), "\n";
}

//addChild=>子要素を足す
// $add_el = $items->addChild('item');
// $add_el->addChild('name', 'GO入門');
// $add_el->addChild('price', '3000');

// $items->asXML('data/items.xml');