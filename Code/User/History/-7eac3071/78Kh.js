var allEntries = document.querySelectorAll('.entry');

allEntries.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        var currentHeight = element.clientHeight;
        var newHeight = currentHeight + 20;
        element.style.height = newHeight + 'px';

    });
    element.addEventListener("mouseout", function() {
        var currentHeight = element.clientHeight;
        var newHeight = currentHeight + 20;
        element.style.height = newHeight + 'px';

    });
});
