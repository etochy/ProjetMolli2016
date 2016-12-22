(function(){
	var app = angular.module('game', []);
	var step = 0;
	
	app.controller('QuestionController', $scope, function($scope) {
		this.questions = questions;
		$scope.correctAnswers = 0;
		
		$scope.incAnswers = function() {
			$scope.correctAnswers++;
		};
	});
	
	app.controller('EcuyerController', function() {
		this.talks = parlotes;
	});

	app.controller('MonsterController', function() {
		this.monsters = monsters;
	});
  
	var monsters = [
		{
			name : "La sorciere (Ze Wissch)",
			id : 0,
			hp : 5,
			image : "/Source/sorciere.jpg"
		},
		{
			name :"Le nain (Ze Douarfe)",
			id : 1,
			hp : 6,
			image : "/Source/nain.jpg"
		},
		{
			name :"Le paysan (Ze Farmeur)",
			id : 2,
			hp : 3,
			image : "/Source/paysan.jpg"
		},
		{
			name :"The Big boss (Ze grosse bosse)",
			id : 3,
			hp : 10,
			image : "/Source/bigboss.jpg"
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

	function GenRand() {
		var randP = Math.floor(Math.random() * parlotes.length)
	}

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

	var questions = [
		{
			theme : "Histoire",
			question: "Quel est la couleur du cheval blanc d'Henry IV ? ",
			reponse: "Blanc",
			f1 : "Jaune",
			f2 : "Marron",
			f3 : "Noire",
		},
		{
			theme : "Hisoire",
			question: "Où est mort la princesse Diana ?",
			reponse: "Paris",
			f1 : "Vietnam",
			f2 : "Londres",
			f3 : "New York",
		},
		{
			theme : "Guerre et bataille",
			question: "Qui a gagné la seconde guerre mondiale? ",
			reponse: "Les Alliés",
			f1 : "l'Axe",
			f2 : "Rexona",
			f3 : "le Comon Wealth",
		},
		{
			theme : "Histoire",
			question: "Quel est le nom de la reine d'angleterre ? ",
			reponse: "Elisabeth",
			f1 : "Victoria",
			f2 : "Catherine",
			f3 : "Diane",
		}
    ]
})();
