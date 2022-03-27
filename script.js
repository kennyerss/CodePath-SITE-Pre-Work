// Global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var clueHoldTime = 1000; //intial value of how long to hold clue
var guessCounter = 0;
var mistakeCounter = 0;
var time = 50;

// start and stop game functions
function startGame() { 
  //initialize game variables
  time = 50;
  clueHoldTime=1000; //resets clueholdTime
  randomPattern(1,7); //generates random pattern
  mistakeCounter = 0;
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  //timer
  clock = setInterval("timer()", 1000);
  //make mistakeCount in HTML be 0 every time game restarts
  document.getElementById("mistakeCount").innerHTML = 0;
  //make timeRemaining in HTML be 30 every time game restarts
  document.getElementById("timeRemaining").innerHTML = 50;
}

function stopGame() {
  gamePlaying = false;
 
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  clearInterval(clock);
  
  
}

// timer function
function timer() {
  // decreases time remaining by and updates the span "timeRemaining" in HTML
  time -= 1;
  if (time < 50) {
    document.getElementById("timeRemaining").innerHTML = time;
  }
  if (time < 1) {
    loseGame();
    clearInterval();
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 245,
  2: 350,
  3: 375,
  4: 299,
  5: 110,
  6: 160
}

function playTone(btn,len) { 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn) {
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// light and clear buttons
function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}


// generating random pattern
function randomPattern(min, max) {
  for (var i=0; i<6; i++) {
    //generates numbers from 1-6
    var randomNum = Math.floor(Math.random() * (max-min) + min);
    pattern.push(randomNum);
  }
}

// playing single clue
function playSingleClue(btn) {
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// playing clue sequence with random pattern
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    clueHoldTime = clueHoldTime - 35; // decreases hold time for each turn 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// lose game and win game functions
function loseGame(){
  stopGame();
  alert("Game Over. You lost. Maybe next time!");
}

function winGame(){
  stopGame();
  alert("Gamve Over. Congratulations, you won!");
}

// guess function
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  //Guess is correct
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      
    if(progress == pattern.length-1) {
      winGame(); //when user's guess is equals to pattern's length then they win
    }
    else {
      // otherwise when still playing, increment progress and play the sequence again
      progress ++;
      playClueSequence();
    }
    }else { // increments the guessCounter
      guessCounter++;
    }
  }else { // otherwise when guess is incorrect, increment mistake
        mistakeCounter++;
       document.getElementById("mistakeCount").innerHTML = mistakeCounter;
    if(mistakeCounter == 3) { //when mistake is 3, user loses the game
      loseGame();
    }
    }
}


 

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
