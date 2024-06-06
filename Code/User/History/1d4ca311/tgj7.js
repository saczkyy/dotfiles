let liczba = parseInt(prompt("podaj liczbe", '0'));

let p = document.getElementById('wynik');

if (liczba == 0){
    p.innerHTML = `liczba ${liczba} jest rowna 0`;
} else {
    p.innerHTML = liczba < 0 ? `liczba ${liczba} jest mniejsza niz 0` : `liczba ${liczba} jest wieksza niz 0`
}
