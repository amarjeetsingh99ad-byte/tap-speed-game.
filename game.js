let score = 0;
let time = 5;
let timerStarted = false;
let timer;
let gameActive = false;

// sound
let tapSound = new Audio("assets/tap.mp3");

// show player name
window.onload = function () {
    let name = localStorage.getItem("playerName");
    document.getElementById("playerName").innerText = "Player: " + name;
};

// start game
function startGame() {

    score = 0;
    time = 5;
    timerStarted = false;
    gameActive = false;

    document.getElementById("score").innerText = score;
    document.getElementById("time").innerText = time;
    document.getElementById("result").innerText = "";

    startCountdown();
}

// countdown
function startCountdown(){

    let count = 3;
    let display = document.getElementById("countdown");

    display.innerText = count;

    let cd = setInterval(()=>{

        count--;

        if(count > 0){
            display.innerText = count;
        }
        else if(count === 0){
            display.innerText = "GO!";
        }
        else{
            clearInterval(cd);
            display.innerText = "";
            gameActive = true; // unlock tapping
        }

    },1000);
}

// tap
function tap(){

    if(!gameActive) return;

    // vibration
    if(navigator.vibrate){
        navigator.vibrate(30);
    }

    // sound
    tapSound.currentTime = 0;
    tapSound.play();

    if(!timerStarted){
        startTimer();
        timerStarted = true;
    }

    if(time > 0){
        score++;
        document.getElementById("score").innerText = score;
    }
}

// timer
function startTimer(){

    timer=setInterval(()=>{

        time--;
        document.getElementById("time").innerText=time;

        if(time<=0){
            clearInterval(timer);
            endGame();
        }

    },1000);
}

// end
function endGame(){
    gameActive=false;

    document.getElementById("result").innerText=
        "⏰ Time Up! Score: "+score;

    saveScore(score);
}

// leaderboard
function goLeaderboard(){
    window.location.href="leaderboard.html";
}

// save score online
function saveScore(score){

    let player=localStorage.getItem("playerName");

    db.collection("scores").add({
        name:player,
        score:score,
        created:Date.now()
    });
}

// share
function shareScore(){

    let player=localStorage.getItem("playerName");
    let text=player+" scored "+score+" taps! Beat me 😎";

    if(navigator.share){
        navigator.share({
            title:"Tap Speed Game",
            text:text,
            url:window.location.href
        });
    }
    else{
        prompt("Copy your score:",text);
    }
}