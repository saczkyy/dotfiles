let liczba = parseInt(prompt("podaj liczbe pocztakowa", '0'));
let koniec = parseInt(prompt("podja koncowa", '0'));

res = ""
for (var i=0; i <= Math.abs(liczba - koniec); i++){
    res += liczba<koniec ? liczba + i : liczba - i
}

document.getElementById('wynik').innerHTML = res
