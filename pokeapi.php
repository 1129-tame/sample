<?php

$name = $_POST['name'];

//ピカチュウを呼び出すAPI
$url1 = "https://pokeapi.co/api/v2/pokemon/" . "$name";

function poke_decode($url) {
    $pokemon = file_get_contents($url);
    $pokemon = mb_convert_encoding($pokemon, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
    $pokemon = json_decode($pokemon, true);
    return $pokemon;
}
// $pokemon = file_get_contents($url);
// $pokemon = mb_convert_encoding($pokemon, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
// $pokemon = json_decode($pokemon, true);
$pokemons = poke_decode($url1);
// $poke_name = $pokemon['forms'][0]['name'];

$poke_url2 = $pokemons['species']['url'];
$poke_names = poke_decode($poke_url2);
$poke_siri = $poke_names['names'][0]['name'];
echo  $poke_siri;
