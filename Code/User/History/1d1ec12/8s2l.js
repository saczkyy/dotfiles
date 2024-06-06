//1
if (window.innerWidth > 500){
    document.querySelector('.div1').style.backgroundColor = 'green';

} else {
    document.querySelector('.div1').style.backgroundColor = 'blue';
}
//2 
var four = document.querySelector('#four');
var fourComputedStyles = window.getComputedStyle(four)
four.style.color = 'red';
four.style.fontSize = parseInt(fourComputedStyles.getPropertyValue('font-size').slice(0,-2))*1.5 + 'px'
//3
var h2Text = document.querySelector('h2').innerText
four.innerText += h2Text
//4
document.querySelector('h2').innerText = document.querySelector("em").innerText
document.querySelector("em").innerText = h2Text
//5
const date = new Date();
document.querySelector('h2').innerText += date


