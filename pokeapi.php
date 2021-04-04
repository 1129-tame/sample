<?php
//ピカチュウを呼び出すAPI
$url = "https://pokeapi.co/api/v2/pokemon/pikachu";
$pokemon = file_get_contents($url);
$pokemon = mb_convert_encoding($pokemon, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
$pokemon = json_decode($pokemon, true);

echo $pokemon['forms'][0]['name'];

