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
four.innerText += document.querySelector('h2').innerText