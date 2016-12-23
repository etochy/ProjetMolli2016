(function() {

	var app = angular.module('game', []);

	app.controller('QuestionController', ['$scope','$window', function($scope,$window) {
		$scope.question = [];
		$scope.choices = [];
		$scope.answer = null;

		$scope.askedAnswer = 0;
		$scope.step = 0;
		$scope.correctAnswers = 0;

		$scope.monsters = [{name : "La sorciere (Ze Wissch)", id : 0, hp : 5, image : "Source/sorciere.jpg"},
		                   {name :"Le nain (Ze Douarfe)", id : 1, hp : 6, image : "Source/nain.jpg"},
		                   {name :"Le paysan (Ze Farmeur)", id : 2, hp : 3, image : "Source/paysan.jpg"},
		                   {name :"The Big boss (Ze grosse bosse)", id : 3, hp : 10, image : "Source/bigboss.jpg"}];

		$window.init = function(){
			var rootApi = 'https://1-dot-theknowledgestory.appspot.com/_ah/api/';  

			gapi.client.load('questionentityendpoint', 'v1', function() {
				var rand = Math.floor(Math.random() * 130); // TODO récupérer le nombre total de question

				gapi.client.questionentityendpoint.getQuestionEntity({id:rand}).execute(
						function(resp) {
							$scope.question = resp;

							$scope.answer = $scope.question.answer;
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

		// Call when the user validate an answer.
		$scope.validateAnswer = function(userAnswer) {

			if(userAnswer != null){

				if(userAnswer == $scope.answer){
					$scope.correctAnswers++;
				}

				$scope.askedAnswer++;

				if($scope.askedAnswer == 10 && $scope.monsters[$scope.step].hp > 0){
					alert('Game over, vous devez réaffronter ce boss !');
					$scope.askedAnswer = 0;
					$scope.correctAnswers = 0;
				}
				else{
					if($scope.correctAnswers >= $scope.monsters[$scope.step].hp){
						$scope.step++;
						if($scope.step == 4){
							alert('Bravo, vous avez tuer tous les monstres !');
						}
						$scope.askedAnswer = 0;
						$scope.correctAnswers = 0;
					}
				}

				$window.init();
			}
			else{
				alert('Veuillez sélectionner une réponse.');
			}
		}

	}]);


	app.controller('EcuyerController', ['$scope', function ($scope) {
		$scope.parlote = "De Nantess à Mont...";
		$scope.parlotes = ["Tu aimes les sushis ? ", "La réponse D", "Stéphanie de Monaco !", "Jeanne !", "Comment est ce que ... ", "Test 1 2    1 2", "Il est moche !", "Mais alo quoi ?", "Joyeux Noel !", "Pourrr le roi !"];
		$scope.change = function () {
			var rang = Math.floor(Math.random() * 10);
			$scope.parlote = $scope.parlotes[rang];
		}
	}]);


})();
