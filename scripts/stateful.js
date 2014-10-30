$(document).ready(function(){
  var x;
  var y;
  var inputanswer;
  var count;
  var sign = "";
  var numCount_storage = localStorage.getItem("correct-answer");
  if (numCount_storage == null){
    console.log("numCount_storage == null");
    count = 0;
    localStorage.setItem("correct-answer",(count).toString(10));
  }else{
    count = parseInt(numCount_storage,10);
  }
  console.log("count: " + count);
  console.log("count.tostring: " + (count).toString(10));

  document.getElementById("count").textContent = count.toString(10);

  $("#math").html(AdditionProblem());
  $("#mathtype").html("Addition");
  //$("#count").html(count);


  $("#button1").click(function(){
  $("#feedback").html(checkAnswer());

  });


  $("#tryagain").click(function(){
    if ($("#mathtype").text() == "Addition"){
       $("#math").html(AdditionProblem());
       //$("#mathtype").html("Addition");
       $("#feedback").html("");
       $( ".iconomation" ).empty();
    }
    else if ($("#mathtype").text() == "Multiplication"){
       $("#math").html(MultProblem());
       //$("#mathtype").html("Multiplication");
       $("#feedback").html(""); 
       $( ".iconomation" ).empty();
    }
  });

  $("#addition").click(function(){
     $("#math").html(AdditionProblem());
     $("#mathtype").html("Addition");
     $("#feedback").html("");
     $(".testspace").css("border", "3px solid green");
  });

  $("#multiplication").click(function(){
     $("#math").html(MultProblem());
     $("#mathtype").html("Multiplication");
     $("#feedback").html("");
     $(".testspace").css("border", "3px solid red");
  });
  
  //randomize two numbers 
  function AdditionProblem() {
      x = Math.floor((Math.random() * 10) + 1); 
      y = Math.floor((Math.random() * 10) + 1); 
      sign = "+";
      return (x + sign + y);           
  }
  //randomize two numbers 
  function MultProblem() {
      x = Math.floor((Math.random() * 10) + 1); 
      y = Math.floor((Math.random() * 10) + 1); 
      sign = "*";
      return (x + sign + y);           
  }


  function checkAnswer(){
    inputanswer = $("#answer").val();
    
    if ($("#mathtype").text() == "Addition"){
      var correctanswer = x+y;
    }
    else if ($("#mathtype").text() == "Multiplication"){
      var correctanswer = x*y;
    }
    if (inputanswer==correctanswer) {
      count++;
      localStorage.setItem("correct-answer",(count).toString(10));
      $("#count").html(count);

      if (count ==5 && $("#mathtype").text() == "Multiplication"){
        alert("Congratulations you have completed the simple math test!");
      }
      else if (count == 5){
        $("#multiplication").prop("disabled",false);
        $("#newlevel").html("new level unlocked!");
        count = 0;
        localStorage.setItem("correct-answer",(count).toString(10));
      }
      $( ".iconomation" ).empty();
      return ("Congrats, your answer is correct!");

      
    } 
    else {
      count = 0;
      localStorage.setItem("correct-answer",(count).toString(10));
      $("#count").html(count);
      for ( var i = 0; i < x; i++){
        $('.iconomation').append('<i class="em em-apple"></i>');
      }
      $('.iconomation').append('<p>'+sign+'</p><br>');
      for ( var i = 0; i < y; i++){
        $('.iconomation').append('<i class="em em-green_apple"></i>');
      }
      $('.iconomation').append('<p>=</p><br>');

      if (sign == "+"){
        for ( var i = 0; i < x; i++){
          $('.iconomation').append('<i class="em em-apple"></i>');
        }
        if(x > 7 && y > 3 || y > 7 && x > 3){
          $('.iconomation').append('<br>');
        }
        for ( var i = 0; i < y; i++){
          $('.iconomation').append('<i class="em em-green_apple"></i>');
        }
      }
      else if (sign == "*"){
        for(var i = 0; i < y; i++){
          for (var j = 0; j < x; j++){
            $('.iconomation').append('<i class="em em-apple"></i>');
          }
          $('.iconomation').append('<br>');
        }
      }
      return ("Sorry, the correct answer was " + correctanswer);

    }
  }
// var numTimes = localStorage.getItem("visits-Hlfma");
// if(numTimes == null) {
//   count = 0;
// } else {
//   count= parseInt(numTimes, 10);
// }
// count++;
// localStorage.setItem("visits-Hlfma", (count).toString(10))
// document.getElementById("visit-times").textContent = count.toString(10);


  /*var numCount = document.getElementById("count");
  numCount = parseInt(numCount,10);
  localStorage.setItem("correct-answer", (numCount).toString(10));
  if(localStorage.getItem("correct-answer")){
    numCount.value = localStorage.getItem("correct-answer");
    console.log("(numCount).toString(10)" + (numCount).toString(10));
  }

   numCount.addEventListener("change", function(){
     localStorage.setItem("correct-answer",numCount.value);
     console.log("localStorage.setItem " + numCount.value);

  });*/








  /*localStorage.setItem("correct-answer",count);
  var numCount = localStorage.getItem("correct-answer");
  console.log("count: "+ count);
  console.log("numCount: "+ numCount);
  document.getElementById("count").textContent = numCount.toString(10);
  */
});

