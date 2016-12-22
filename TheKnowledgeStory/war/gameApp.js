(function() {
	var app = angular.module('game', []);
	var step = 0;
	var correctAnswers = 0;
	
	app.controller('QuestionController', function() {
		this.theme;
		this.name;
		this.choices;
	});
	
	app.controller('EcuyerController', function() {
		this.talks = parlotes;
	});

	app.controller('MonsterController', function() {
		this.monsters = monsters;
		this.step = step;
	});
	
	// Call when the user validate an answer.
	function validateAnswer(correct) {
		if(correct){
			correctAnswers++;
		}
		
		if(correctAnswers == monsters[step].hp){
			step++;
			correctAnswers = 0;
		}
		
		if(){
			
		}
		
	}
	
	function genRand() {
		var randP = Math.floor(Math.random() * parlotes.length)
	}
	
	function shuffle(array) {
		var current = array.length, tmp, rand;
		while (0 !== currentIndex) {
			rand = Math.floor(Math.random() * current);
			current--;
			tmp = array[current];
			array[current] = array[rand];
			array[rand] = tmp;
		}
		return array;
	}
  
	var monsters = [
		{
			name : "La sorciere (Ze Wissch)",
			id : 0,
			hp : 5,
			image : "Source/sorciere.jpg"
		},
		{
			name :"Le nain (Ze Douarfe)",
			id : 1,
			hp : 6,
			image : "Source/nain.jpg"
		},
		{
			name :"Le paysan (Ze Farmeur)",
			id : 2,
			hp : 3,
			image : "Source/paysan.jpg"
		},
		{
			name :"The Big boss (Ze grosse bosse)",
			id : 3,
			hp : 10,
			image : "Source/bigboss.jpg"
		}
	]

	var parlotes = [
		{
			parlote : "Tu aimes les sushis ? "
		},
		{
			parlote : "La réponse D"
		},
		{
			parlote : "Stéphanie de Monaco !"
		},
		{
			parlote : "Jeanne !"
		},
		{
			parlote : "Comment est ce que ... "
		},
		{
			parlote : "Test 1 2    1 2"
		},
		{
			parlote : "Pourrr le roi !"
		}
	]
})();
