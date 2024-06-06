var allEntries = document.querySelectorAll(".entry");
console.log(allEntries)
var auto;

allEntries.forEach(function(element) {
    if (!auto){
        auto = element.clientHeight;
    }
    element.style.height = element.style.height = auto + 30 + "px";

    element.addEventListener("mouseenter", function() {
        element.style.overflow = "visible"
        element.style.maxHeight = element.clientHeight + 30 + "px";
        console.log("hejj")
    });
    element.addEventListener("mouseleave", function() {
        element.style.maxHeight = "80px";
    });
});
