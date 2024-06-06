let liczba = parseInt(prompt("podaj liczbe", '0'));

res = ""
for (var i=0; i <= Math.abs(liczba - koniec); i++){
    res += liczba<koniec ? (liczba + i) + " " : liczba - i + " "
}

document.getElementById('wynik').innerHTML = res
