(function() {
	
	var app = angular.module('game', []);
	
	var step = 0;
	var correctAnswers = 0;
	var askedAnswer = 0;
	var monsters = [{
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
	        		}];
	var parlotes = [{
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
	        		}];
	
	app.controller('QuestionController', ['$scope','$window', function($scope,$window) {
		var rand = Math.floor(Math.random() * 130); // TODO récupérer le nombre total de question
		$scope.question = [];
		$scope.choices = [];
		
		$window.init = function(){
			var rootApi = 'https://1-dot-theknowledgestory.appspot.com/_ah/api/';  
			  
			gapi.client.load('questionentityendpoint', 'v1', function() {
				gapi.client.questionentityendpoint.getQuestionEntity({id:rand}).execute(
					function(resp) {
						$scope.question = resp;

						$scope.choices[0] = $scope.question.answer;
						$scope.choices[1] = $scope.question.wrongAnswer1;
						$scope.choices[2] = $scope.question.wrongAnswer2;
						$scope.choices[3] = $scope.question.wrongAnswer3;
						
						//$scope.choices = shuffle(choices);
						
						$scope.$apply();
						console.log(resp);
					}	
				);
			}, rootApi);
		}
	}]);
	
	app.controller('EcuyerController', function() {
		this.talks = parlotes;
	});

	app.controller('MonsterController', function() {
		this.monsters = monsters;
		this.step = step;
		this.correctAnswers = correctAnswers;
	});
	
	// Call when the user validate an answer.
	function validateAnswer(correct) {
		if(correct){
			correctAnswers++;
		}
		askedAnswer++;
		if(askedAnswer == 10){
			if(correctAnswers >= monsters[step].hp){
				step++;
			}
			else{
				alert('Game over, vous devez réaffronter ce boss !');
			}
			askedAnswer = 0;
			correctAnswers = 0;
		}
	}
	
	// Return a random number
	function genRand() {
		return Math.floor(Math.random() * parlotes.length);
	}
	
	// Randomize an array
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
	
})();
