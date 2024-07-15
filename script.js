var timerVal=60;
var score=0;
var hitRandomNumber=0;

document.querySelector(".panelBottom").addEventListener("click",function(event){
    var clickedNumber=Number(event.target.textContent);
    if(clickedNumber==hitRandomNumber)
    {
        increaseScore();
        makeBubble();
        getNewHit();
    }

})


function getNewHit()
{
    hitRandomNumber=Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent=hitRandomNumber;
}

function increaseScore(){
score+=10;
document.querySelector("#scoreVal").textContent=score;
}

function makeBubble(){
    var clutter="";
for(var i=0; i<140;i++)
{
    var randomNumber=Math.floor(Math.random()*10);
    clutter+=`<div class=bubble>${randomNumber}</div>`;
}

document.querySelector(".panelBottom").innerHTML=clutter;
}
function runTimer()
{
    var timer=setInterval(function(){
        if(timerVal>0)
        {
            timerVal--;
            document.querySelector("#timer").textContent=timerVal;
        }
        else
        {
            clearInterval(timer);
            document.querySelector("#timer").textContent="Time's Up";
            document.querySelector(".panelBottom").innerHTML=`<h1>Game Over! Your Score ${score}</h1><br><button id="playAgainBtn" onclick="location.reload()">Play Again</button>`;              
        }
    },1000)
}
makeBubble();
getNewHit();
runTimer();
