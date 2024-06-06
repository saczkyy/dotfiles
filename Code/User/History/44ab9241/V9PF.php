<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //zad 1
    for ($i = 0; $i <= 100; $i++){
        $res = $i % 2 ? "blue" : "red";
        echo "<font color='$res'>$i </font>";
    }

    echo '<br>';
    //zad 2
    $globalna = 2;
    function funkcja() {
        $lokalna = 3;
    }

    echo '<br>';
    //zad 3
    function sprawdz($a) {
        return $a % 3 ? "nie jest" : "jest";
    }
    echo(sprawdz(2));

    echo '<br>';
    //zad 4
    for ($i = 0; $i <= 100; $i++){
        $res += $i % 2 ? 0 : $i;
        echo "$res";
    }
    ?>
</body>
</html>