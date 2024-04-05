
console.log("Servicio de música activado...");

const audioPlayer = document.getElementById('audioPlayer');
const title = document.getElementById('title');
const btnPlayPause = document.getElementById('btn-playPause');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnVolume = document.getElementById('btn-volumen');
const numMusic = document.querySelector('.count-music');


let song_playing = false;
const rutaAudio = "../assets/audio/";



const songList = [
    {
        path: rutaAudio+"Coldplay-TheScientist.mp3",
        name: "Coldplay-TheScientist"
    },
    {
        path: rutaAudio+"joseLog.mpeg",
        name: "Cachaca' (Lyric)"
    }
];

//function play
function playSong(){
    song_playing = true;
    audioPlayer.play();

    //cambia icono 
    btnPlayPause.classList.remove('fa-play');
    btnPlayPause.classList.add('fa-pause');


}
//function plause
function pauseSong(){
    song_playing = false;
    audioPlayer.pause();
    btnPlayPause.classList.remove('fa-pause');
    btnPlayPause.classList.add('fa-play');

}
//play or pause song click
btnPlayPause.addEventListener('click', () => (song_playing ? pauseSong() : playSong()));

//load songList
function loadSong(songList){

    title.textContent = songList.name;
    audioPlayer.src = songList.path;
    console.log('Reproduciendo Music');

}

let currentSongIndex = 0;
//on load - select first dsnog from song list
loadSong(songList[currentSongIndex]);
// Inicializa el número de canciones
numMusic.textContent = `${currentSongIndex + 1} / ${songList.length}`;
//fuction preview song
function prevSong(){
    currentSongIndex--;
    if(currentSongIndex < 0){
        currentSongIndex = songList.length -1;
        
    }
    loadSong(songList[currentSongIndex]);//cambiar la music
    playSong();//rproducir al momento que se cabie
    updateSongCounter();
}

//fuction preview song
function nextSong(){
    currentSongIndex++;
    if(currentSongIndex > songList.length -1 ){
        currentSongIndex = 0;
        
    }
    loadSong(songList[currentSongIndex]);//cambiar la music
    playSong();//rproducir al momento que se cabie
    updateSongCounter();
}

// Función para cambiar el volumen
function changeVolume() {
    const volume = btnVolume.value / 100; // Convertir el valor del rango de 0-100 a 0-1
    audioPlayer.volume = volume; // Establecer el volumen del reproductor de audio
}

// Actualizar el contador de canciones
function updateSongCounter() {
    numMusic.textContent = `${currentSongIndex + 1} / ${songList.length}`;
}

// Capturar el evento de cambio en el control de volumen
btnVolume.addEventListener('input', changeVolume);



btnPrev.addEventListener('click', prevSong);
btnNext.addEventListener('click', nextSong);




console.log("Musicas : " + JSON.stringify(songList));


// Puedes implementar la funcionalidad para los botones de anterior y siguiente, así como el control de volumen si es necesario.

// Puedes implementar la funcionalidad para los botones de anterior y siguiente, así como el control de volumen si es necesario.
