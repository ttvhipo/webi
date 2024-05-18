<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="poo2">Fullscreen</button>
    <video id="fart" src="media/fart.mp4" controls></video>
    <div id="disqus_thread"></div>
    <script>
        /**
         *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
         *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
        var disqus_config = function () {
            this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = 'unique_page_identifier'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        
        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://menjak.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

    <script>
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

            // Play video
            var video = document.getElementById("fart");
            video.play();
        }
    </script>
</body>
</html>
