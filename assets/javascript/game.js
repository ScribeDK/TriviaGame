//correct, wrongs, no guess
var correct = 0;
var wrong = 0;
var noGuess = 0;
//set question data
questNum = 0;
QuestionList = [];
AnswerList = ["<h2>The answer was Christopher Pike <span class='timer'></span></h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>"];
//countdown timer vars
var counter;
var count = 15;
var game = true;
var timerClass = $(".timer");


startTimer();


$('.answer').on('click', function() {
		
			//check if answer is correct
			var playerAns = ($(this).attr('data-tag'));
			if (eval(playerAns) == true){
				correct = correct +1;
				$("#pictureBox").html("<br><br><h3>You where right.</h3>")
			}
			else{ wrong = wrong + 1; 
			$("#pictureBox").html("<br><br><h3>Your answer was wrong.</h3>")
			}
			game = false;
			count = 10;
			answerDisplay();
});


function startTimer(){
	//timer interval = one second
	counter = setInterval(timer, 1000);
	timer();
}

//timer function
function timer(){
	count = count - 1;
	
	//send time to timer
	timerClass.html(count);
	
	if (count <= 0 && game == true)
	{
		clearInterval(counter);
		noGuess = noGuess + 1;
		$("#pictureBox").html("<br><br><h3>You did not answer in time.</h3>")
		game = false;
		count = 10;
		answerDisplay();
		return;
	}
	if (count <= 0 && game == false){
		$("#pictureBox").css("visibility", "hidden");	
		clearInterval(counter);
		game = true
		count = 15;
		question();
		return;
	}
}

function answerDisplay(){
	console.log("output:");
	console.log(correct);
	console.log(wrong);
	console.log(noGuess);
	$(".triviaBox").html("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
	$("#pictureBox").append(AnswerList[questNum]);
	$("#pictureBox").css("visibility", "visible");
	startTimer();
}

function question(){
	$(".triviaBox").html(QuestionList[questNum]);		
	questNum = questNum + 1;
	
	
}