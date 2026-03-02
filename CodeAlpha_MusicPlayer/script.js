let songs = [
    {
        name: "SoundHelix Track 1",
        artist: "Sample Artist",
        path: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        name: "SoundHelix Track 2",
        artist: "Sample Artist",
        path: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    }
];

let audio = document.getElementById("audio");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");

let currentSong = 0;
let isPlaying = false;


function loadSong(index) {
    audio.src = songs[index].path;
    title.textContent = songs[index].name;
    artist.textContent = songs[index].artist;
}

loadSong(currentSong);


function playPause() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        document.querySelector(".controls button:nth-child(2)").textContent = "⏸";
    } else {
        audio.pause();
        isPlaying = false;
        document.querySelector(".controls button:nth-child(2)").textContent = "▶";
    }
}

function nextSong() {
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    loadSong(currentSong);
    audio.play();
    isPlaying = true;
    document.querySelector(".controls button:nth-child(2)").textContent = "⏸";
}


function prevSong() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    loadSong(currentSong);
    audio.play();
    isPlaying = true;
    document.querySelector(".controls button:nth-child(2)").textContent = "⏸";
}


audio.addEventListener("timeupdate", () => {
    let progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
});


progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});
audio.addEventListener("ended", () => {
    nextSong();
});
