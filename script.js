document.getElementById('enterButton').addEventListener('click', function() {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }

    document.getElementById('imageContainer').style.display = 'block';
});

document.getElementById('shareButton').addEventListener('click', function() {
    var url = window.location.href;
    navigator.clipboard.writeText(url)
        .then(function() {
            alert('URL copied to clipboard!');
        })
        .catch(function(error) {
            console.error('Failed to copy URL: ', error);
        });
});
