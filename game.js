  
var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
ctx.beginPath();
ctx.rect(0,0,canvas.width,canvas.height);
ctx.fillStyle="pink";
ctx.fill();
ctx.fillStyle="blue";
ctx.textAlign="center";

var start = ctx.fillText("Click To Start", canvas.width/2, canvas.height/2)

canvas.addEventListener('click', function() {
  newQues()
})

var signArr= ['+','-','*',/*'/'*/]

var QuesCount = 0
var CorrectCount = 0
var WrongCount = 0

function newQues() {
  
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="pink";
  ctx.fill();

  inp.disabled=false;

  var num1 = Math.floor(Math.random()*10)+4
  var num2 = Math.floor(Math.random()*10)+4
  var sign = signArr[Math.floor(Math.random()*4)]

  var question = num1+" "+sign+" "+num2
  var solution = eval(question)
  
  ctx.fillStyle="black"
  ctx.textAlign="center"
  ctx.fillText(question, canvas.width/2, canvas.height/4)

  console.log(question)
  console.log("Solution is "+solution)

  function checkAns(ans) {

    if (solution == ans) {
      ctx.fillStyle="green"
      ctx.fillText("Correct!",canvas.width/2, canvas.height/2)
    }
    else {
      ctx.fillStyle="red"
      ctx.fillText("Wrong!",canvas.width/2, canvas.height/2)
    }

    setTimeout( function () {
      newQues()
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
