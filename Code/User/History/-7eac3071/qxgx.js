var allEntries = document.getElementsByClassName(".entry");
console.log(allEntries)

allEntries.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        var currentHeight = element.clientHeight;
        var newHeight = currentHeight + 20;
        element.style.height = newHeight + 'px';
        console.log("hejj")

    });
    element.addEventListener("mouseout", function() {
        element.style.height = 70 + 'px';
    });
});
