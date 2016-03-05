var questions = [
	{
		question: "Jalen Rose's least favorite number?",
		answer: 81
	},
	{
		question: "Which player is the NBA logo designed after?",
		answer: "jerry west"
	},
	{
		question: "Finish this sentence: Malace at the _______?",
		answer: "palace"
	},
	{
		question: "Which of the 50 greatest players wears the largest jeans?",
		answer: "michael jordan"
	},
	{
		question: "What NBA great is known for the phrase: 'THAT'S TURRBLE KENNAYYY'",
		answer: "charles barkley"
	},
	{
		question: "This player is famously known for his legendary 'cry meme'",
		answer: "michael jordan"
	},
	{
		question: "We talking bout ________?",
		answer: "practice"
	},
	{
		question: "I'm taking my talents to  _______.",
		answer: "south beach"
	},
	{
		question: "Name the team captain for the OKC Thunder.",
		answer: "russell westbrook"
	},
	{
		question: "Who has the most illusive hairline in the league?",
		answer: "lebron james"
	}
]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}