if (window.innerWidth > 500){
    document.querySelector('.div1').style.backgroundColor = 'green';

} else {
    document.querySelector('.div1').style.backgroundColor = 'blue';
}
var four = document.querySelector('#four');
var fourComputedStyles = four.computedStyleMap();
four.style.color = 'red';

for (const [prop, val] of fourComputedStyles){
    if (prop == 'font-size'){
        console.log("halo");
    }
}
