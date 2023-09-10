var timer = 60;
var score = 0;
var hitrand = 0;


// jis bhi element pe click kroge uspe event raise hoga, aur event listener na milne par event element ke 
// parent par listener dhundhega wha bhi na milne par event parent ke parent ke parent par listener dhundhega 

function increaseScore(){
    score += 10
    document.querySelector("#scoreval").textContent = score
}

function makebubble(){
    var space = "";

    for (var i = 1; i <= 96; i++){
        var randm = Math.floor(Math.random()*10);
        space += `<div class="bubble">${randm}</div>`;
    }

    document.querySelector("#pnlbottom").innerHTML = space;
}

function runTimer() {
    var timerinter = setInterval(function() {
        if (timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerinter);
            document.querySelector("#pnlbottom").innerHTML = `<h1>GameOver</h1>`;
        }

    } , 1000);
}

function newHit(){
    hitrand = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrand; 
}

document.querySelector("#pnlbottom").addEventListener("click",function(details){
    var clickednumber = Number(details.target.textContent);
    if (clickednumber === hitrand){
        increaseScore();
        makebubble();
        newHit();
    }

})

makebubble();
runTimer();
newHit();
