var allEntries = document.querySelectorAll('.entry');

allEntries.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        var currentHeight = element.clientHeight;
        var newHeight = currentHeight + 20;


    });
});


// Calculate the current height and add 20 pixels


// Apply the new height to the element
element.style.height = newHeight + 'px';