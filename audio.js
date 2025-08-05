const audioBtn = document.getElementById('audio-btn');
const audio = new Audio('./assets/bg-audio.mp3');
audio.loop = true;
        
audioBtn.addEventListener('click', handleAudio);

function handleAudio() {
    if (audioBtn.classList.contains('playing')) {
        audioBtn.className = 'paused';
        audio.pause();
        audioBtn.setAttribute('title', 'play audio');
    } else if (audioBtn.classList.contains('paused')) {
        audioBtn.className = 'playing';
        audio.play();
        audioBtn.setAttribute('title', 'mute audio');
    }
}