var allEntries = document.querySelectorAll(".entry");
console.log(allEntries)

allEntries.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        element.style.height = "auto"
        var currentHeight = element.clientHeight;
        // element.style.height = 80 + "px"
        // var newHeight = currentHeight + 30;
        // element.style.height = newHeight + 'px';
        console.log("hejj")

    });
    element.addEventListener("mouseleave", function() {
        element.style.height = 80 + 'px';
    });
});
