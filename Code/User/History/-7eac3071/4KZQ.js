var allEntries = document.querySelectorAll(".entry");
console.log(allEntries)
var auto;

allEntries.forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        auto = element.clientHeight;
        element.style.height = 80 + "px"
        var newHeight = auto + 30;
        element.style.height = newHeight + 'px';
        console.log("hejj")

    });
    element.addEventListener("mouseleave", function() {
        element.style.height = auto + 30 + "px";
    });
});
