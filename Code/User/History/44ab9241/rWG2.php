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

    //zad 5
    echo '<br><br>';
    echo date("Y \- m \- d");
    echo '<br>';
    echo date("d \- m \- Y");
    echo '<br>';
    echo date("j, F Y");
    echo '<br>';
    echo date("jS, F Y");
    echo '<br>';
    echo date("h:i:sa");
    echo '<br>';
    echo date("Y \- m \- d jS, F Y");

    //zad 6
    echo '<br><br>';
    echo 365 - intval(date('z'));

    //zad 6
    echo '<br><br>';
    echo date('a') == 'am' ? 'milego poranka' : 'smacznych snow';

    //zad 7
    echo '<br><br>';
    $miesiac = date('m');
    switch($miesiac) {
        case 1 : $miesiac = "styczen";
        break;
        case 2 : $miesiac = "luty";
        break;
        case 3 : $miesiac = "marzec";
        break;
        case 4 : $miesiac = "kwiecien";
        break;
        case 5 : $miesiac = "maj";
        break;
        case 6 : $miesiac = "czerwiec";
        break;
        case 7 : $miesiac = "lipiec";
        break;
        case 8 : $miesiac = "sierpien";
        break;
        case 9 : $miesiac = "wrzesein";
        break;
        case 10 : $miesiac = "pazdiernik";
        break;
        case 11 : $miesiac = "listopad";
        break;
        case 12 : $miesiac = "grudizen";
        break;
    }
    echo $miesiac;

    //zad 8
    echo '<br><br>';
    $dzien = date('N');
    switch($dzien){
        case 1 : $dzien = "pon";
        break;
        case 2 : $dzien = "wtor";
        break;
        case 3 : $dzien = "sroda";
        break;
        case 4 : $dzien = "czwartke";
        break;
        case 5 : $dzien = "piate";
        break;
        case 6 : $dzien = "sobo";
        break;
        case 7 : $dzien = "niedzi";
        break;
    }
    echo $dzien;

    //zad 9
    echo '<br><br>';
    $uro = date('z', mktime(12,0,0,8,24));
    echo 365 - abs(date('z') - $uro);

    //zad 10 
    echo '<br><br>';
    echo abs(date('z') - $uro);
    $iminieiy = date('z', mktime(12,0,0,12,4));
    $aaaa = abs(date('z') - $iminieiy);



    ?>
</body>
</html>