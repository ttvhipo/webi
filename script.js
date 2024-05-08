document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("poo2");
    var fullscreenButtonClicked = false;

    button.addEventListener("click", function() {
        if (!fullscreenButtonClicked) {
            fullscreenButtonClicked = true;
            brapp(); // Call the function to initiate actions
        }
    });
});

function brapp() {
    var body = document.querySelector("body");

    // Request fullscreen
    if (body.requestFullscreen) {
        body.requestFullscreen();
    } else if (body.mozRequestFullScreen) { /* Firefox */
        body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) { /* IE/Edge */
        body.msRequestFullscreen();
    }

    // Play audio files
    var audio1 = new Audio('media/rape.mp3');
    var audio2 = new Audio('media/scream.mp3');
    var audio3 = new Audio('media/zzart.mp3');

    audio1.loop = true;
    audio2.loop = true;
    audio3.loop = true;

    audio1.play();
    audio2.play();
    audio3.play();
}
