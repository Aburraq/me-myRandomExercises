let isPlaying = false;

const progressEl = document.getElementById("progress");
const songEl = document.getElementById("song");
const playEl = document.getElementById("play");
const playIconEl = document.getElementById("playIcon");

songEl.onloadedmetadata = function(){
    progressEl.max = songEl.duration;
    progressEl.value = songEl.currentTime;

}

playEl.addEventListener("click", () => {
    if(playIconEl.classList.contains("fa-pause")){
        songEl.pause();
        playIconEl.classList.toggle("fa-pause");
        playIconEl.classList.toggle("fa-play");
        isPlaying = false;
    } else{
        songEl.play();
        playIconEl.classList.toggle("fa-pause");
        playIconEl.classList.toggle("fa-play");
        isPlaying = true;
    }

});

setInterval(() => {
    progressEl.value = songEl.currentTime;
}, 500);

progressEl.onchange = function(){
    songEl.play();
    songEl.currentTime = progressEl.value;
    if(!isPlaying){
        playIconEl.classList.add("fa-pause");
        playIconEl.classList.remove("fa-play");
    }
}