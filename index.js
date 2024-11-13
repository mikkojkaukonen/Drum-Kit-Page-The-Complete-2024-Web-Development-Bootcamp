// Get the total number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Add click event listeners to each drum button
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        keyboardSuonds(buttonInnerHTML);    // Play sound based on button clicked
        buttonAnimation(buttonInnerHTML);   // Trigger button animation
    });
}

// Detect keyboard press and trigger sound and animation
document.addEventListener("keydown", function(event){
    keyboardSuonds(event.key);      
    buttonAnimation(event.key);     
}) ;

// Play specific sound based on the key input
function keyboardSuonds(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();  
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey) {

    // Add animation effect to the pressed button
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    // Remove the animation after a short delay
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}
