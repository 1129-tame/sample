<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP講座</title>
</head>
<body>
    <p>現在の時刻は、<?php echo date('H:i:s'); ?>です。</p>
    <?php echo htmlspecialchars('HTMLの見出しは<h1>と書きます', ENT_QUOTES | ENT_HTML5); ?>
</body>
</html>