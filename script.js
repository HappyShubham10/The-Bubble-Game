var timer=60;
var score=0;
var ht;
var trn;

function makeBubble()
{
    var ball="";
    
    for(var i=1; i<=225; i++)
    {
        var rn=Math.floor(Math.random()*10);
        ball+=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bbottom").innerHTML=ball;
}

function makeNewHit()
{
    ht=Math.floor(Math.random()*10);
    document.querySelector("#htbox").textContent=ht;
}

function runTimer()
{
    trn=setInterval(function(){
        if(timer>0) 
        {
            timer--;
            document.querySelector("#timeout").textContent=timer;
        }
        else
        {
            clearInterval(trn);
            document.querySelector("#bbottom").innerHTML=`<h1>Game over</h1>`;
            document.querySelector("#htbox").textContent=0;
        }
    },1000);
}

function increaseScore()
{
    score+=10;
    document.querySelector("#score").textContent=score;
}

document.querySelector("#bbottom").addEventListener("click",function(dets){
    var bubblevalue=Number(dets.target.textContent);
    if(bubblevalue===ht)
    {
        increaseScore();
        makeBubble();
        makeNewHit();
        timer+=2;
        document.querySelector("#timeout").textContent=timer;
    }

})

document.querySelector("#gamestart").addEventListener("click",function(){
    document.querySelector("#gamestart").innerHTML="Restart"; 
    score = 0;
    document.querySelector("#score").textContent=score;
    clearInterval(trn);
    timer = 60;
    document.querySelector("#timeout").textContent=timer;
    runTimer();
    makeBubble();
    makeNewHit();
    
})

// makeBubble();
// runTimer(timer);
// makeNewHit();
