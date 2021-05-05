<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $name = 'Ruby入門';
    $price = 1800; 

    $mysql = new mysqli('localhost', 'root', 'root', 'mydb', 8889);
    if ($mysql->connect_errno) {
        die($mysql->connect_error);
    }

    $stm = $mysql->prepare('INSERT INTO items SET name=?, price=?') or die($mysql->error); //?->プレースホルダー
    $stm->bind_param('si', $name, $price); //bind->割当て si=>s=string,i=int
    $stm->execute() or die($stm->error);
    echo 'データを挿入しました';
    
    
    ?>
</body>
</html>