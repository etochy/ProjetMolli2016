(function()
var app = angular.module('highscore',[]).controller
	('ScoreController', ['$scope', '$windows',
		function($scope, $windows){
			$scope.scores = '[{name : "toto",
							 score : 100 }]'
			
	$window init = function(){
 		var rootApi = 'http://1-dot-theknowledgeknight.appspot.com/_ah/api/';
 		gapi.client.load('scoreentityendpoint','v1'function(){
 			gapi.client.scoreentityendpoint.listScoreEntity().execute{
 				function(resp){
 					$scope.scores = resp.items;
 					$scope.$apply();
 					console.log(resp);
 				});
 		}, rootApi);
 		}
