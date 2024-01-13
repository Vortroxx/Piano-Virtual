const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input");


let mapedkeys = [];
let audio = new Audio("../src/tunes/;.wav")
const playTune = (key) => {
  
    audio.src = `/src/tunes/${key}.wav`;
    audio.play();

const clickedkey = document.querySelector(`[data-key="${key}"]`);
clickedkey.classList.add("active");
setTimeout(()=>{
    clickedkey.classList.remove("active")
}, 150);
};


pianoKeys.forEach((key) => {
    
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedkeys.push(key.dataset.key);
    
});


document.addEventListener("keydown", (e)=>{
    if (mapedkeys.includes(e.key)){
        playTune(e.key);

    };

});

const handlevolume = (e)=>{
 audio.volume = e.target.value;
};

const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("hide"))
};

volumeSlider.addEventListener("input", handlevolume);

keysCheck.addEventListener("click", showHideKeys);