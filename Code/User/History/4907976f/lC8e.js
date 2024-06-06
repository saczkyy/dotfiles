var counter = document.getElementById("counter");


document.getElementById("decrease").addEventListener("click", function(){
    counter.innerText = (parseInt(counter.innerText) - 1).toString()
})


