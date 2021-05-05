<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php $sum=1 + 10; ?>
    <?php if ($sum > 10): ?>
    <?php echo '10よりも大きいです'; ?> 
    <?php else: ?>
        <?php echo '10以下です'; ?>
    <?php endif; ?>
</body>
</html>