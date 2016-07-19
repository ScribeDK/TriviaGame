//correct, wrongs, no guess
var correct = 0;
var wrong = 0;
var noGuess = 0;
//countdown timer vars
var counter;
var count = 15;
var game = true;
//set question data
questNum = 0;
QuestionList = ["<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>"];
AnswerList = ["<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",
"<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",
"<h2>The answer was Christopher Pike</span></h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",
"<h2>The answer was Christopher Pike</span></h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",
"<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",
"<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",
"<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",
"<h2>The answer was Christopher Pike</span></h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",
"<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",
"<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'>",];



question();


function startTimer(){
	//timer interval = one second
	counter = setInterval(timer, 1000);
	return timer();
}

//timer function
function timer(){
	count = count - 1;
	
	//send time to timer
	$(".timer").text(''+count);
	
	if (count <= 0 && game == true)
	{
		clearInterval(counter);
		noGuess = noGuess + 1;
		$("#pictureBox").html("<br><br><h3>You did not answer in time.</h3>")
		game = false;
		count = 5;
		return answerDisplay();
	}
	if (count <= 0 && game == false){
		$("#pictureBox").css("visibility", "hidden");	
		clearInterval(counter);
		game = true
		count = 15;
		if(questNum <= 9){
		return question();
		}
		else{return finish();}
	}
}

function answerDisplay(){
	game = false;
	count = 5;
	
	$(".triviaBox").html("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
	$("#pictureBox").append(AnswerList[questNum]);
	$("#pictureBox").css("visibility", "visible");
	questNum = questNum + 1;
	return startTimer();
	
}

function question(){
	//send question to html
	$(".triviaBox").html(QuestionList[questNum]);		
	
	//start timer
	startTimer();

	$('.answer').on('click', function() {
		
			//check if answer is correct
			var playerAns = ($(this).attr('data-tag'));
			if (eval(playerAns) == true){
				correct = correct +1;
				$("#pictureBox").html("<br><br><h3>You where right.</h3>")
			}
			//else answer was wrong
			else{ wrong = wrong + 1; 
			$("#pictureBox").html("<br><br><h3>Your answer was wrong.</h3>")
			}
			clearInterval(counter);
			return answerDisplay();
	});	
}

function finish(){
	
	//output final stats
	$(".triviaBox").html("<br><br><br><h2>Your final score is</h2><br><h3>Correct answers: " + correct + " Wrong answers: " + wrong + " Answers that timed out: " + noGuess + "</h3><br><h3 class='answer'>Try again?</h3><br><br><br><br><br>")

			//restart
			$('.answer').on('click', function() {
			location.reload(true);
			});	
}


