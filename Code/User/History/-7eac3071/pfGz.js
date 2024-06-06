var allEntries = document.querySelectorAll(".entry");
console.log(allEntries)
var auto;

allEntries.forEach(function(element) {
    if (!auto){
        auto = element.clientHeight;
    }
    element.addEventListener("mouseenter", function() {
        var span = element.getElementsByTagName("span")[0]
        span.style.whiteSpace = "normal"
        element.style.maxHeight = "500px";
        console.log("hejj")
    });
    element.addEventListener("mouseleave", function() {
        var span = element.getElementsByTagName("span")[0]
        element.style.maxHeight = auto + 10 + "px";
        span.style.whiteSpace = null

    });
    element.style.height = null
});
