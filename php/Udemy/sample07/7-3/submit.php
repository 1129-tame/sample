<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- $_POST $_GET $_REQUEST -->
    
    <?php if (isset($_POST['message'])) { ?>
    <?php $message = $_POST['message']; ?>
    <p>message: <?php echo htmlspecialchars("$message") ?></p>
    <?php } ?>
</body>
</html>