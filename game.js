
document.getElementById(quesDisplay)
quesDisplay.innerHTML = "Maths"

gameState = "toStart"

document.addEventListener('click', function() {
  if (gameState==="toStart"){
    startTimer();
    gameState="started"
    console.log("click")
    inp.focus()
    newQues()
  }  
})

// document.addEventListener('keyup', function(event) {
//   if (gameState==="toStart" && event.keyCode == 13){
//     startTimer();
//     gameState="started"
//     console.log("click")
//     inp.focus()
//     newQues()
//   }  
// })



// FINAL COLOR TAKEN BY LAST QUESTION RESULT COLOR
// CENTER SETTINGS (IF ANY)
// ONCE RESTARTED BY ENTER AT THE END

var signArr= ['+','-','*','/'];

var score = 0

let question
let solution

function newQues() {
  
  quesResult.innerHTML = ""
  inp.disabled=false;
  inp.focus()
  inp.value=""
  var sign = signArr[Math.floor(Math.random()*4)]

  var num1 = Math.floor(Math.random()*10)+4
  var num2 = Math.floor(Math.random()*10)+4
  
  if (sign=='/') {
    num3 = num1*num2
    num1 = num3
  }  

  console.log("sign index is "+ Math.floor(Math.random()*4))

  question = num1+" "+sign+" "+num2;
  console.log("quest is "+question);
  solution = eval(question);

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
    newQues()
    inp.focus()
    inp.value=""
  }, 300)
}

inp.addEventListener('keyup', function(event){
    
  if(event.keyCode==13) {
    if (inp.value!=="") {        
      inp.disabled=true;        
      checkAns(inp.value)
    }
    else if (inp.value==""){console.log("Enter on Nil")}
  }
})



function startTimer() {
  var timer = 60
  var interval = setInterval( function () {
    console.log('ok')
    if (gameState==="started") {
      timer-=1;
      timerDisp.innerHTML=timer;

      if (timer<=55){
        timerDisp.innerHTML = ""
        question = "no question";
        solution = "nothing";
        clearInterval(interval)
        quesDisplay.innerHTML = "Time Over! <span id=restart> <br/> (Click to Start Again) </span>"
        quesResult.innerHTML = "SCORE"  + "<br />" + "<span id=scoreSpan>"+score+"</span>"
        quesResult.style.top = "40%"
        inp.disabled = true
        gameState="toStart"
      }
    }    
  }, 1000)
}
