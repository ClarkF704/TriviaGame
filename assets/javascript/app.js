
var rightQuestion = "";
var wrongQuestion = "";
var incompleteQuestion = 0;
var correctAnswer = 0;
var questionCheck = [];

var timer;
var time = 60;


var myQuestions = [
  {
    question: "What is Batmans real name ?",
    answers: {
      a: 'Dick',
      b: 'James',
      c: 'Bruce',
      d: 'Clark'
    },
    rightQuestion: 'c'
  },
  {
    question: "Who is Batmans butler ?",
    answers: {
      a: 'Dalton',
      b: 'Fred',
      c: 'James',
      d: 'Alfred'
    },
    rightQuestion: 'd'
  },
  {
    question: "Who is Batmans most notorious enemy ?",
    answers: {
      a: 'Lex Luther',
      b: 'Reverse Flash',
      c: 'Zoom',
      d: 'The Joker'
    },
    rightQuestion: 'd'
  },
  {
    question: "How were Batmans parents Murdered ?",
    answers: {
      a: 'A drive by',
      b: 'Mugged',
      c: 'Car crash',
      d: 'Boat wreck'
    },
    rightQuestion: 'b'
  },
  {
    question: "What is Batmans SideKick called ?",
    answers: {
      a: 'Robin',
      b: 'Oliver Queen',
      c: 'Green Lantern',
      d: 'Spider-Man'
    },
    rightQuestion: 'a'
  },
  {
    question: "Why is Batman called Batman ?",
    answers: {
      a: 'He was once afraid of bats',
      b: 'He is weird',
      c: 'Good question',
      d: 'His butler suggested it'
    },
    rightQuestion: 'a'
  },
  {
    question: "Who trained Batman ?",
    answers: {
      a: 'Ras Al Ghoul',
      b: 'Local Martial Artist',
      c: 'Robin',
      d: 'The Joker'
    },
    rightQuestion: 'a'
  },
  {
    question: "Who is Batmans biggest love interest with ?",
    answers: {
      a: 'Talia Al Ghoul',
      b: 'Cat Woman',
      c: 'Poison Ivy',
      d: 'Its the 21st centuary. Dont assume his sexual preferences'
    },
    rightQuestion: 'b'
  },
  {
    question: "Which Batman enemy flips a coin ?",
    answers: {
      a: 'Two Face',
      b: 'Poison Ivy',
      c: 'The Joker',
      d: 'Bane'
    },
    rightQuestion: 'a'
  },
  {
    question: "Why does the Joker kill people ?",
    answers: {
      a: 'He is a villian and thats what they do',
      b: 'He wants to impress Harley Quinn',
      c: 'He thinks its fun and likes toying with Batman',
      d: 'He likes to eat people'
    },
    rightQuestion: 'c'
  },
];
//make a time variable set to 60 sec
//questions right variable
//questions wrong variables
//questions incomplete variable
//**Add variable array of questions, choices, and right answer */
//////////////////////////////////////////////////////////////////////////////////////////////


//**Functions**


//add onclick function when submiting questions

//add start game function(runs when page loads).
$("#start").click(function() {
  $("#start").hide();
  $("#cloak").show();
  $(startGame).show();

  // runs code after a certain amout of time
// setTimeout();

// // clears timeout
// clearTimeout();


// // to create a countdown timer - use setTimeout();
// // start at 60 seconds
// // when user begins game, start counting down by one second to 0
// //for submit quiz



// //run code every specified amount of time
// setInterval();

// // cancel a timed, repeating action declared in setInterval();
// clearInterval();







timer = setInterval(function () {
    time--;
    $("#timer").html(time);
    
    if (time === 0) {
        clearInterval(timer);
        // call your submit function (done function )
    }
    
}, 1000);





function startGame() {
  for (var i = 0; i < myQuestions.length; i++) {
    $("#quiz").append(myQuestions[i].question + "<br>");
    $("#quiz").append("<input type='radio' name ='question " + i + "' value='a'>" + myQuestions[i].answers.a + "<br>");
    $("#quiz").append("<input type='radio' name ='question " + i + "' value='b'>" + myQuestions[i].answers.b + "<br>");
    $("#quiz").append("<input type='radio' name ='question " + i + "' value='c'>" + myQuestions[i].answers.c + "<br>");
    $("#quiz").append("<input type='radio' name ='question " + i + "' value='d'>" + myQuestions[i].answers.d + "<br>");
  }
  };


  function questionCheck() {
  
    if (rightQuestion === "radio") {
      correctAnswer ++;
      $("#score").html(correctAnswer);
    
    } 
    
    if (rightQuestion !== "radio"){
      wrongAnswer ++;
      $("#score").html(wrongAnswer);
    }

  }

  $("#submit").click(function () {
    var choice = $("input[name='question1']").val();
    console.log(choice);

    questionCheck();
  });
});

//reset time,right,wrong,incomplete
//make div appear once timer hits zero 
//check if submitted answers matches correct answer


//
//very begin of game
//user click button to start game
//start game function runs,start timer decreases, questions appear
//user clicks on buttons for answer choices
//game ends when timer stops or user clicks submit
//function runs to check/grade responses
//update html to show results and unhide/show the results div


// $("#questionLot").hide();


// $( "#startButton" ).click(function() {
//     $("#questionLot").show();
//     $("#startButton").hide();
//   });


// function gameStart

// function questionCheck() {
//   rightQuestion = 0;
//   if (rightQuestion === "radio") {
//     correctAnswer ++;
//     $("#score").html(correctAnswer);
  
//   } if (rightQuestion !== "radio"){
//     wrongAnswer ++;
//     $("#score").html(wrongAnswer);
//   }

// }

