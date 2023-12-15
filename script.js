var timer = 60;
var score  = 0;
var scoreHit = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function getNewHit() {
  scoreHit = Math.floor(Math.random() * 10);
  document.querySelector("#hitInt").textContent = scoreHit;
}

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 75; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#Pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#Pbtm").innerHTML = `<h1>Game Over<h1>`
    }
  }, 1000);
}

document.querySelector("#Pbtm")
.addEventListener('click', function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if(clickedNum === scoreHit){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
