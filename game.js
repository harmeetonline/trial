
document.getElementById(quesDisplay)
quesDisplay.style.color = "#2d95c2"
quesDisplay.innerHTML = "Maths<span id=restart> <br/> (Click to Start Again) </span>"

gameState = "toStart"
var timer = 60

document.addEventListener('click', function() {
  if (gameState==="toStart"){
    startTimer();
    gameState="started"
    inp.focus()
    newQues()
  }  
})

var signArr= ['+','-','*','/'];

var score = 0

let question
let solution

function newQues() {
  
  quesResult.innerHTML = ""
  inp.disabled=false;
  enterAllowed = true;
  inp.focus()
  inp.value=""
  var sign = signArr[Math.floor(Math.random()*4)]

  var num1 = Math.floor(Math.random()*10)+4
  var num2 = Math.floor(Math.random()*10)+4
  
  if (sign=='/') {
    num3 = num1*num2
    num1 = num3
  }  

  question = num1+" "+sign+" "+num2;
  solution = eval(question);

  quesDisplay.style.color = "#808080"
  quesDisplay.innerHTML = question;
}

function checkAns(ans) {
    
  if (solution == ans) {
    quesResult.style.color="#92C68A";
    quesResult.innerHTML = "Correct!";
    score += 10
  }
  else {
      quesResult.innerHTML = "Wrong!"
      quesResult.style.color = "#CB5555";
  }

  setTimeout( function () {
    if (gameState == "started" && timer>0) {
      newQues()
      inp.focus()
      inp.value=""
    }
  }, 300)
}
var enterAllowed = true
inp.addEventListener('keyup', function (event) {    
  if (event.keyCode==13 && enterAllowed == true && gameState === "started") {
    if (inp.value!=="") {        
      inp.disabled=true;        
      checkAns(inp.value)
    }
  }
})


function startTimer() {
  timer = 60
  var interval = setInterval( function () {
    if (gameState==="started") {
      timer-=1;
      // timerDisp.innerHTML=timer;

      if (timer<=0){
        enterAllowed = false
        timerDisp.innerHTML = ""
        question = "no question";
        solution = "nothing";
        clearInterval(interval)
        quesDisplay.style.color = "#2d95c2"
        quesDisplay.innerHTML = "Time Over! <span id=restart> <br/> (Click to Start Again) </span>"
        quesResult.style.color = "#2d95c2"
        quesResult.innerHTML = "SCORE"  + "<br />" + "<span id=scoreSpan>"+score+"</span>"
        quesResult.style.top = "40%"
        inp.disabled = true
        gameState="toStart"
      }
    }    
  }, 1000)
}
