var app = angular.module('generation', []);

app.controller('generation', function($scope, $http) {
	console.log("Generation");
	
	enregistrerQuestion = function(id, theme, question, answer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
		var rootApi = 'https://1-dot-theknowledgestory.appspot.com/_ah/api';
		var _id = id;
		var _theme = theme;
		var _question = question;
		var _answer = answer;
		var _wrongAnswer1 = wrongAnswer1;
		var _wrongAnswer2 = wrongAnswer2;
		var _wrongAnswer3 = wrongAnswer3;

		gapi.client.load('questionentityendpoint', 'v1', function() {
			console.log("api loaded");

			gapi.client.questionentityendpoint.insertQuestionEntity({
				id: _id,
				theme: _theme,
				question: _question,
				answer: _answer,
				wrongAnswer1: _wrongAnswer1,
				wrongAnswer2: _wrongAnswer2,
				wrongAnswer3: _wrongAnswer3
			}).execute(
					function(resp) {
						console.log(resp);
					});
		}, rootApi);
	}

	this.generer = function() {
		console.log("lancement");
		$http.get('batailles.json').success(function(response) {
			$scope.myData = response.results;
			angular.forEach($scope.myData, function(key, value) {
				var test = {
						nom: null,
						debut: null,
						fin: null,
						lieu: null,
						combattant: null
				};

				var question = {
						theme: null,
						question: null,
						reponse: null,
						f1: null,
						f2: null,
						f3: null
				}
				var list = [];
				var i = -1;
				var id = 2;
				var reg = new RegExp("[-]+", "g");

				angular.forEach(key, function(bindings, value2) {
					var chaine = bindings.debut.value;
					var tableau = chaine.split(reg);
					test = {
							nom: bindings.nomlabel.value,
							debut: tableau[0],
							fin: bindings.fin.value,
							lieu: bindings.lieu.value,
							combattant: bindings.combattant.value
					};

					if (i == -1) {
						var array = [-1, -2, -3, -4, -5, -6, -7, -8, -9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
						var num = Math.floor(Math.random() * array.length);
						var roll = array.splice(num, 1);
						var fa1 = roll[0];

						num = Math.floor(Math.random() * array.length);
						roll = array.splice(num, 1);
						var fa2 = roll[0];

						num = Math.floor(Math.random() * array.length);
						roll = array.splice(num, 1);
						var fa3 = roll[0];

						question = {
								theme: "Guerre et bataille",
								question: "Quelle est l'année de debut de " + test.nom,
								reponse: test.debut,
								f1: Number(test.debut) + fa1,
								f2: Number(test.debut) + fa2,
								f3: Number(test.debut) + fa3
						}

						this.enregistrerQuestion(id,question.theme, question.question, question.reponse, question.f1, question.f2, question.f3);
						id += 1;
						list.push(test.nom);
						i = 0;
					} else if (list[i] == test.nom) {} else {

						var array = [-1, -2, -3, -4, -5, -6, -7, -8, -9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

						var num = Math.floor(Math.random() * array.length);
						var roll = array.splice(num, 1);
						var fa1 = roll[0];

						num = Math.floor(Math.random() * array.length);
						roll = array.splice(num, 1);
						var fa2 = roll[0];

						num = Math.floor(Math.random() * array.length);
						roll = array.splice(num, 1);
						var fa3 = roll[0];

						question = {
								theme: "Guerre et bataille",
								question: "Quelle est la date de debut de " + test.nom,
								reponse: test.debut,
								f1: Number(test.debut) + fa1,
								f2: Number(test.debut) + fa2,
								f3: Number(test.debut) + fa3
						}
						this.enregistrerQuestion(id,question.theme, question.question, question.reponse, question.f1, question.f2, question.f3);
						id += 1;
						list.push(test.nom);
						console.log(question);

						i = i + 1;
						console.log("=x : " + i);
					}
				});
			});
		})
		.error(function() {
			console.log("error, file not found");
		});
	}
});
