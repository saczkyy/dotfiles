<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    for ($i = 0; $i <= 100; $i++){
        $res = $i % 2 ? "blue" : "red";
        echo `$i`;
    }
    ?>
</body>
</html>