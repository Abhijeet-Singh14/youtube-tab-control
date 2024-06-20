document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        pauseVideo();
    } else {
        playVideo();
    }
});

function pauseVideo() {
    const video = document.querySelector('video');
    if (video && !video.paused) {
        video.pause();
    }
}

function playVideo() {
    const video = document.querySelector('video');
    if (video && video.paused) {
        video.play();
    }
}
