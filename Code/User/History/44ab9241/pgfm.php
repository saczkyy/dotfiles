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

    //zad 2
    echo '<br><br>';
    $globalna = 2;
    function funkcja() {
        $lokalna = 3;
    }

    //zad 3
    echo '<br><br>';
    function sprawdz($a) {
        return $a % 3 ? "nie jest" : "jest";
    }
    echo(sprawdz(2));

    //zad 4
    echo '<br><br>';
    $res = 0;
    for ($i = 0; $i <= 100; $i++){
        $res += $i % 2 ? 0 : $i;
    }
    echo "$res";
    ?>
</body>
</html>