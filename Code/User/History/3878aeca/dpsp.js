potegi = (x) => {
    let a = parseInt(liczba1.value)
    let b = parseInt(liczba2.value)

    if (isNaN(a) || isNaN(b)) {
        w = "Proszę uzupełnić obie liczby! "
    } else {
        w = Math.pow(a, b)
    } 
    
    document.getElementById('wynik').innerText = w
}


f = (x) => {
    let a = parseInt(i1.value)
    let b = parseInt(i2.value)
    let w
    if (isNaN(a) || isNaN(b)) {
        w = "Proszę uzupełnić obie liczby! "
    } else if (x == 4 && b == 0) {
        w = `Nie wolno dzielić przez ${0}! `;
    } else {
        if (x == 1) w = a + b
        else if (x == 2) w = a - b
        else if (x == 3) w = a * b
        else if (x == 4 && b != 0) w = a / b
        w = `Wynik dziania wynosi → ${w} `;
    }
    o1.value = w
}