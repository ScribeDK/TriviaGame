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
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Which race was the first to invent cloaking technology:</h3><br><h3 class='answer' data-tag='false'>Humans</h3><h3 class='answer' data-tag='false'>Andorians</h3><h3 class='answer' data-tag='false'>Klingons</h3><h3 class='answer' data-tag='true'> Romulans</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Which race eventually split into three diffrent races:</h3><br><h3 class='answer' data-tag='true'>Vulcans</h3><h3 class='answer' data-tag='false'>Ferengi</h3><h3 class='answer' data-tag='false'>Bajorans</h3><h3 class='answer' data-tag='false'>Bolians</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Which of these drinks in the most intoxicating:</h3><br><h3 class='answer' data-tag='false'>Klingon Bloodwine</h3><h3 class='answer' data-tag='true'>Romulan Ale</h3><h3 class='answer' data-tag='false'>Saurian Brandy</h3><h3 class='answer' data-tag='false'>Synthehol</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>What element is the main component of Vulcan/Romulan blood:</h3><br><h3 class='answer' data-tag='false'>Zinc</h3><h3 class='answer' data-tag='false'>Iron</h3><h3 class='answer' data-tag='true'>Copper</h3><h3 class='answer' data-tag='false'>Carbon</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Which of these small craft was first used in a combat role:</h3><br><h3 class='answer' data-tag='false'>Delta Flyer</h3><h3 class='answer' data-tag='true'>Danube Runabout</h3><h3 class='answer' data-tag='false'>Type 7 Shuttle</h3><h3 class='answer' data-tag='false'>Type 15 Shuttlepod</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>What was the Scimitar class Warbird's original design purpose:</h3><br><h3 class='answer' data-tag='false'>To threaten the Federation</h3><h3 class='answer' data-tag='false'>To help conquer the Klingon Empire</h3><h3 class='answer' data-tag='true'>To destory a Borg ship in one attack</h3><h3 class='answer' data-tag='false'>To kill all life on a planet from orbit</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>"];
AnswerList = ["<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'><br><br>",
"<h2>The answer was the Romulans</h2><img src='assets/images/cloaking.jpg' alt='Romulan Decloaking' height='200px' width='200px'><br><br>",
"<h2>The answer was the Vulcans.</h2><p>Who split to became the Romulans, some of whom later mutated into the Remans</p></h2><img src='assets/images/vulcan-romulan-reman.jpg' alt='vulcan-romulan-reman' height='300px' width='434px'><br><br>",
"<h2>The answer was Romulan Ale</h2><img src='assets/images/romulan-ale.jpg' alt='Romulan Ale' height='200px' width='200px'><br><br>",
"<h2>The answer was Copper</h2><img src='assets/images/green-blood.jpg' alt='Copper Blood' height='200px' width='200px'><br><br>",
"<h2>The answer was the Danube Runabout</h2><img src='assets/images/USS_Rubicon.jpg' alt='Danube Runabout' height='200px' width='200px'><br><br>",
"<h2>The answer was to destory a Borg ship in one attack</h2><img src='assets/images/Scimitar.jpg' alt='Scimitar' height='400px' width='400px'><br><br>",
"<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'><br><br>",
"<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'><br><br>",
"<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'><br><br>",];



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
		$(".triviaBox").html("<br><br><br><h3>You did not answer in time.</h3>")
		game = false;
		count = 7;
		return answerDisplay();
	}
	if (count <= 0 && game == false){	
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
	count = 7;
	
	//$(".triviaBox").html("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
	$(".triviaBox").append(AnswerList[questNum]);
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
				$(".triviaBox").html("<br><br><br><h3>You where right.</h3>")
			}
			//else answer was wrong
			else{ wrong = wrong + 1; 
			$(".triviaBox").html("<br><br><br><h3>Your answer was wrong.</h3>")
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


