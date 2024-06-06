var allEntries = document.querySelectorAll(".entry");
console.log(allEntries)
var auto;

allEntries.forEach(function(element) {
    if (!auto){
        auto = element.clientHeight;
    }
    element.style.height = element.style.height = auto + 30 + "px";

    element.addEventListener("mouseenter", function() {
        element.style.maxheight = auto + 30 + "px";
        console.log("hejj")
    });
    element.addEventListener("mouseleave", function() {
        element.style.height = auto + 30 + "px";
    });
});
