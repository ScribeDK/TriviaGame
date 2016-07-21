//correct, wrongs, no guess
var correct = 0;
var wrong = 0;
var noGuess = 0;
//countdown timer vars
var counter;
var count = 15;
//amount of time for questions and answers
var answerTime = 7;
var questionTime = 15;
//is the player answering a question (true) or seeing an answer (false)
var game = true;
//track current question
var questNum = 0;
//set question data
QuestionList = ["<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who was the first captain of the original Enpterise:</h3><br><h3 class='answer' data-tag='false'>James T. Kirk</h3><h3 class='answer' data-tag='false'>Jean-Luc Picard</h3><h3 class='answer' data-tag='true'>Christopher Pike</h3><h3 class='answer' data-tag='false'>Jonathan Archer</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Which race was the first to invent cloaking technology:</h3><br><h3 class='answer' data-tag='false'>Humans</h3><h3 class='answer' data-tag='false'>Andorians</h3><h3 class='answer' data-tag='false'>Klingons</h3><h3 class='answer' data-tag='true'> Romulans</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Which race eventually split into three diffrent races:</h3><br><h3 class='answer' data-tag='true'>Vulcans</h3><h3 class='answer' data-tag='false'>Ferengi</h3><h3 class='answer' data-tag='false'>Bajorans</h3><h3 class='answer' data-tag='false'>Bolians</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Which of these drinks in the most intoxicating:</h3><br><h3 class='answer' data-tag='false'>Klingon Bloodwine</h3><h3 class='answer' data-tag='true'>Romulan Ale</h3><h3 class='answer' data-tag='false'>Saurian Brandy</h3><h3 class='answer' data-tag='false'>Synthehol</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>What element is the main component of Vulcan/Romulan blood:</h3><br><h3 class='answer' data-tag='false'>Zinc</h3><h3 class='answer' data-tag='false'>Iron</h3><h3 class='answer' data-tag='true'>Copper</h3><h3 class='answer' data-tag='false'>Carbon</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Which of these small craft was first used in a combat role:</h3><br><h3 class='answer' data-tag='false'>Delta Flyer</h3><h3 class='answer' data-tag='true'>Danube Runabout</h3><h3 class='answer' data-tag='false'>Type 7 Shuttle</h3><h3 class='answer' data-tag='false'>Type 15 Shuttlepod</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>What was the Scimitar class Warbird's original design purpose:</h3><br><h3 class='answer' data-tag='false'>To threaten the Federation</h3><h3 class='answer' data-tag='false'>To help conquer the Klingon Empire</h3><h3 class='answer' data-tag='true'>To destory a Borg ship in one attack</h3><h3 class='answer' data-tag='false'>To kill all life on a planet from orbit</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Who created Data:</h3><br><h3 class='answer' data-tag='true'>Dr. Noonian Soong</h3><h3 class='answer' data-tag='false'>Dr. Zefram Cochrane</h3><h3 class='answer' data-tag='false'>Dr Leonard McCoy</h3><h3 class='answer' data-tag='false'>Mot</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>In which show/movie did Michael Dorn (Worf) first appear in the star trek time line:</h3><br><h3 class='answer' data-tag='false'>Star Trek: Next Generation</h3><h3 class='answer' data-tag='false'>Star Trek: Deep Space 9</h3><h3 class='answer' data-tag='true'>Star Trek VI: The Undiscovered Country</h3><h3 class='answer' data-tag='false'>Star Trek: Generations</h3><br>",
"<br><br><br><h2>Time Remaining: <span class='timer'></span></h2><br><h3>Which of these space ships is the largest:</h3><br><h3 class='answer' data-tag='true'>D'deridex-class Warbird <img src='assets/images/Romulan_Star_Empire_logo.png' alt='Romulans' height='58px' width='100px'></h3><h3 class='answer' data-tag='false'>Galaxy-class starship <img src='assets/images/United_Federation_of_Planets_logo.png' alt='Federation' height='58px' width='76px'></h3><h3 class='answer' data-tag='false'>Vor'cha-class attack cruiser <img src='assets/images/Klingon_Empire_logo.png' alt='Klingons' height='58px' width='49px'></h3><h3 class='answer' data-tag='false'>Keldon-class cruiser <img src='assets/images/Cardassian_Union_logo.png' alt='Cardassians' height='58px' width='36px'></h3><br>"];
AnswerList = ["<h2>The answer was Christopher Pike</h2><img src='assets/images/Christopher_Pike.jpg' alt='Christopher Pike' height='200px' width='200px'><br><br>",
"<h2>The answer was the Romulans</h2><img src='assets/images/cloaking.jpg' alt='Romulan Decloaking' height='200px' width='200px'><br><br>",
"<h2>The answer was the Vulcans.</h2><p>Who split to became the Romulans, some of whom later mutated into the Remans</p></h2><img src='assets/images/vulcan-romulan-reman.jpg' alt='vulcan-romulan-reman' height='300px' width='434px'><br><br>",
"<h2>The answer was Romulan Ale</h2><img src='assets/images/romulan-ale.jpg' alt='Romulan Ale' height='200px' width='200px'><br><br>",
"<h2>The answer was Copper</h2><img src='assets/images/green-blood.jpg' alt='Copper Blood' height='200px' width='200px'><br><br>",
"<h2>The answer was the Danube Runabout</h2><img src='assets/images/USS_Rubicon.jpg' alt='Danube Runabout' height='200px' width='200px'><br><br>",
"<h2>The answer was to destory a Borg ship in one attack</h2><img src='assets/images/Scimitar.jpg' alt='Scimitar' height='400px' width='400px'><br><br>",
"<h2>The answer was Dr. Noonian Soong</h2><img src='assets/images/Noonian_Soong.jpg' alt='Noonian Soong' height='200px' width='200px'><br><br>",
"<h2>The answer was Star Trek VI: The Undiscovered Country</h2><p>Michael Dorn played Worf, grandfather of Next Generations Worf</p><img src='assets/images/Colonel_Worf.jpg' alt='Colonel Worf' height='200px' width='200px'><br><br>",
"<h2>The answer was the D'deridex-class Warbird</h2><img src='assets/images/Dderidex_class.jpg' alt='Dderidex Warbird' height='300px' width='500px'><br><br>",];


//start the game
$('.answer').on('click', function() {
	question();
});	


//start timer function
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
	
	//if the player runs out of time
	if (count <= 0 && game == true)
	{
		//turn off timer
		clearInterval(counter);
		//count that no guess was made
		noGuess = noGuess + 1;
		//send player did not guess message
		$(".triviaBox").html("<br><br><br><h3>You did not answer in time.</h3>")
		//set timer for answer display time
		game = false;
		count = answerTime;
		return answerDisplay();
	}
	
	//Finish showing question answer
	if (count <= 0 && game == false){
		
		//turn off timer
		clearInterval(counter);
		
		//set timer for question display time
		game = true
		count = questionTime;
		
		//check if last question
		if(questNum <= 9){
		return question();
		}
		else{return finish();}
	}
}

function answerDisplay(){
	
	//set timer for answer display time	
	game = false;
	count = answerTime;
	
	//display answer to HTML
	$(".triviaBox").append(AnswerList[questNum]);
	
	//increase question number for next question
	questNum = questNum + 1;
	
	//turn timer on
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
				correct = correct + 1;
				$(".triviaBox").html("<br><br><br><h3>You where right.</h3>")
			}
			//else answer was wrong
			else{ wrong = wrong + 1; 
			$(".triviaBox").html("<br><br><br><h3>Your answer was wrong.</h3>")
			}
			
			//turn timer off
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


