if (window.innerWidth > 500){
    document.querySelector('.div1').style.backgroundColor = 'green';

} else {
    document.querySelector('.div1').style.backgroundColor = 'blue';
}
var four = document.querySelector('#four');
var fourComputedStyles = window.getComputedStyle(four)
four.style.color = 'red';
fourComputedStyles.setProperty('font-size', toString(parseInt(fourComputedStyles.getPropertyValue('font-size').slice(0,-2))*1.5))
