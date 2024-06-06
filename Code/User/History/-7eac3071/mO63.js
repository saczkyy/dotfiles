var allEntries = document.querySelectorAll(".entry");
console.log(allEntries)

allEntries.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        var currentHeight = element.clientHeight;
        var newHeight = currentHeight + 30;
        element.style.height = newHeight + 'px';
        console.log("hejj")

    });
    element.addEventListener("mouseout", function() {
        element.style.height = 80 + 'px';
    });
});
