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

var element = document.querySelector('h2');
var tag = document.createElement("em");
tag.style.fontSize = parseInt(window.getComputedStyle(element).getPropertyValue('font-size').slice(0,-2))*1.3 + 'px'
tag.style.color = 'red'
var text = document.createTextNode(date);
tag.appendChild(text);
element.appendChild(tag);


