
// respond to click
function handleClick(){
    alert("I got clicked!");
}
// event listener
//document.querySelector("button").addEventListener("click", handleClick);
// OR incorporate function into event listener setup
/* document.querySelector("button").addEventListener("click", function(){
    alert("i got clicked ;P");
}); */

// multiple items at once: add event listeners
var drumBtn = document.querySelectorAll(".drum"); // get elements
var drumBtnLength = drumBtn.length; // identify length for loop
// loop to add event listener to each element in list
for (var i = 0; i<drumBtnLength; i++) {
    // add the listener to the event for each element - function will only be called on event
    drumBtn[i].addEventListener("click", function() {
        // v1: add audio value to the event listener
        /*var audio = new Audio('sounds/crash.mp3');
        // play sound when event happens
        audio.play();*/
        // end v1
        // v4
        var btnInnerHTML = this.innerHTML
        makeSound(btnInnerHTML);
        btnAnimation(btnInnerHTML);
        // end v4
        // v3: use switch instead of if stmts below
        /*switch (btnInnerHTML) {
            case "w":
                var audio = new Audio('sounds/crash.mp3');
                break;

            case "a":
                var audio = new Audio('sounds/snare.mp3');
                break;

            case "s":
                var audio = new Audio('sounds/tom-1.mp3');
                break;

            case "d":
                var audio = new Audio('sounds/kick-bass.mp3');
                break;

            case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                break;
            
            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                break;

            case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                break;

            default:
                var audio = new Audio('sounds/tom-4.mp3');
                break;
        }*/
        // end v3
        // v2: select sound for each item (works but cumbersome/unscalable)
        /*if(this.innerHTML==="w"){
            var audio = new Audio('sounds/crash.mp3');
        } else if(this.innerHTML==="a"){
            var audio = new Audio('sounds/snare.mp3');
        } else if(this.innerHTML==="s"){
            var audio = new Audio('sounds/tom-1.mp3');
        } else if(this.innerHTML==="d"){
            var audio = new Audio('sounds/kick-bass.mp3');
        } else if(this.innerHTML==="j"){
            var audio = new Audio('sounds/tom-2.mp3');
        } else if(this.innerHTML==="k"){
            var audio = new Audio('sounds/tom-3.mp3');
        } else {
            var audio = new Audio('sounds/tom-4.mp3');
        }*/
        // play selected sound: uncomment below for v2 and v3
        /*audio.play();*/
        
    });
}

// respond to keyboard events
document.addEventListener("keydown", function(event) {
    // call function to make sound
    makeSound(event.key);
    // call function to highlight button pressed
    btnAnimation(event.key);
});

// function for sound - works for button click OR keyboard
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            break;

        case "a":
            var audio = new Audio('sounds/snare.mp3');
            break;

        case "s":
            var audio = new Audio('sounds/tom-1.mp3');
            break;

        case "d":
            var audio = new Audio('sounds/kick-bass.mp3');
            break;

        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            break;

        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            break;

        default:
            //var audio = new Audio('sounds/tom-4.mp3');
            alert("not that one");
            break;
    }
    // play selected sound
    audio.play();
}
// add animation for button or key clicks
// - call from within click and keydown event listeners above
function btnAnimation (currentKey) {
    // identify button clicked/pressed
    var activeButton = document.querySelector("."+currentKey);
    // change style to indicate clicked
    activeButton.classList.add("pressed");
    // set time to remove 'pressed' style and revert to before event
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100); // '100' indicates time delay for remove in milliseconds
}