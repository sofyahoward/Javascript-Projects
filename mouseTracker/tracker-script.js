const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const SQUARE = document.querySelector('.square');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function circleMouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth -e.clientX -50;
    var verticalPosition=  windowHeight -e.clientY -50;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition +'px';

}

function squareMouseCoordinates(e) {
    var horizontalPosition = e.clientX -26;
    var verticalPosition=  e.clientY -26;

    SQUARE.style.left = horizontalPosition + 'px';
    SQUARE.style.top = verticalPosition +'px';
}


function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', squareMouseCoordinates, false);

AREA.addEventListener('mousemove', circleMouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
