(function() {

	var app = angular.module('game', []);

	app.controller('QuestionController', ['$scope','$window', function($scope,$window) {
		$scope.question = null;
		$scope.answer = null;
		$scope.choices = [];

		$scope.askedAnswer = 0;
		$scope.step = 0;
		$scope.correctAnswers = 0;

		$scope.monsters = [{name : "La sorciere", id : 0, hp : 3, image : "Source/sorciere.jpg"},
		                   {name :"Le nain", id : 1, hp : 4, image : "Source/nain.jpg"},
		                   {name :"Le paysan", id : 2, hp : 5, image : "Source/paysan.jpg"},
		                   {name :"The Big boss", id : 3, hp : 6, image : "Source/bigboss.jpg"}];
		
		$scope.shuffle = function() {
		      var a = $scope.choices;
		      var j, x, i;
		      for (let i = a.length; i; i--) {
		        let j = Math.floor(Math.random() * i);
		        [a[i - 1], a[j]] = [a[j], a[i - 1]];
		      }

		      $scope.choices = a;
		}

		$window.init = function(){
			var rootApi = 'https://1-dot-theknowledgestory.appspot.com/_ah/api/';  

			gapi.client.load('questionentityendpoint', 'v1', function() {
				var rand = Math.floor(Math.random() * 130);
				
				gapi.client.questionentityendpoint.getQuestionEntity({id:rand}).execute(
						function(resp) {
							$scope.question = resp;
							
							$scope.answer = $scope.question.answer;
							$scope.choices[0] = $scope.question.answer;
							$scope.choices[1] = $scope.question.wrongAnswer1;
							$scope.choices[2] = $scope.question.wrongAnswer2;
							$scope.choices[3] = $scope.question.wrongAnswer3;

							$scope.shuffle();

							$scope.$apply();
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
					alert('Game over');
					$scope.askedAnswer = 0;
					$scope.correctAnswers = 0;
					$window.location.href = '/index.html';
				}
				else{
					if($scope.correctAnswers >= $scope.monsters[$scope.step].hp){
						$scope.step++;
						if($scope.step == 4){
							alert('Bravo, vous avez tuer tous les monstres !');
							$$window.location.href = '/index.html';
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
