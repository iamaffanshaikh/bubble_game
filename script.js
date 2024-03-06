function makeBubble(){
  var clutter = "";

  for (var i = 0; i <= 170; i++){
      var rn = Math.floor(Math.random()*10);
      clutter += `<div class="bubble">${rn}</div>`
  }
  
  document.querySelector(".pbtm").innerHTML = clutter;
}

timer = 60;
function runTimer(){
  setInterval(function(){
    if(timer>0){
      
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else{
      clearInterval();

    }

  }, 1000) 
}

var rn
function newHit(){
  rn = Math.floor(Math.random()*10);
  document.querySelector("#newHit").textContent = rn;
}

score = 0;
function increaseScore(){
  score += 10;
  document.querySelector("#increaseScore").textContent = score;
}

function finalMechanism(){
  document.querySelector(".pbtm")
  .addEventListener("click",function (details) {
  var clickedNumber = (Number(details.target.textContent)); 
    if(clickedNumber == rn){
        increaseScore();
        newHit();
        makeBubble();
    }
    });
}



finalMechanism();
newHit();
runTimer();
makeBubble();

