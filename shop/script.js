const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');
const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');
const muteUnmuteIcon = document.getElementById('muteUnmuteIcon');

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        video.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
});

muteUnmuteBtn.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteUnmuteIcon.classList.remove('fa-volume-mute');
        muteUnmuteIcon.classList.add('fa-volume-up');
    } else {
        video.muted = true;
        muteUnmuteIcon.classList.remove('fa-volume-up');
        muteUnmuteIcon.classList.add('fa-volume-mute');
    }
});