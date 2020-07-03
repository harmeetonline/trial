
document.getElementById(quesDisplay)
quesDisplay.innerHTML = "Maths"

gameState = "toStart"

quesDisplay.addEventListener('click', function() {
  if (gameState==="toStart"){
    gameState="started"
    console.log("click")
    newQues()
  }  
})

var signArr= ['+','-','*',/*'/'*/]

var QuesCount = 0
var CorrectCount = 0
var WrongCount = 0

function newQues() {
  

  inp.disabled=false;

  var num1 = Math.floor(Math.random()*10)+4
  var num2 = Math.floor(Math.random()*10)+4
  var sign = signArr[Math.floor(Math.random()*4)]

  var question = num1+" "+sign+" "+num2
  var solution = eval(question)

  quesDisplay.innerHTML = question
  console.log(question)
  console.log("Solution is "+solution)

  function checkAns(ans) {

    if (solution == ans) {
      // ctx.fillStyle="green"
      // ctx.fillText("Correct!",canvas.width/2, canvas.height/2)
      quesResult.innerHTML = "Correct"
    }
    else {
      quesResult.innerHTML = "Wrong"
      // ctx.fillStyle="red"
      // ctx.fillText("Wrong!",canvas.width/2, canvas.height/2)
    }

    setTimeout( function () {
      newQues()
      inp.focus()
      inp.value=""
    }, 300)
  }

  inp.addEventListener('keypress', function(event){
    if(event.keyCode==13) {
      if (inp.value!=="") {
        console.log("Enter on "+inp.value);
        // document.getElementById("inp").disabled=true;
        inp.disabled=true;
        checkAns(inp.value)
      }
      else if (inp.value==""){console.log("Enter on Nil")}
   }
  })

}
