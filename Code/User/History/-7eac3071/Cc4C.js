var allEntries = document.querySelectorAll(".entry");
console.log(allEntries)
var auto;

allEntries.forEach(function(element) {
    if (!auto){
        auto = element.clientHeight;
    }
    element.style.maxHeight = element.style.height = auto + 30 + "px";

    element.addEventListener("mouseenter", function() {
        element.style.overflow = "visible"
        var span = element.getElementsByTagName("span")[0]
        span.style.whiteSpace = "normal"
        element.style.maxHeight = "500px";
        console.log("hejj")
    });
    element.addEventListener("mouseleave", function() {
        element.style.overflow = null
        var span = element.getElementsByTagName("span")[0]
        span.style.whiteSpace = "nowrap"
        element.style.maxHeight = "80px";
    });
});
