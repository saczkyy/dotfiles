var element = document.querySelector('.element');

// Calculate the current height and add 20 pixels
var currentHeight = element.clientHeight;
var newHeight = currentHeight + 20;

// Apply the new height to the element
element.style.height = newHeight + 'px';