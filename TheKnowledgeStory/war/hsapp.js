(function(){
	var app = angular.module('highscore',[]);
	  app.controller('ScoreController', ['$scope','$window', function($scope,$window){
		  		$scope.scores = [];
		  	
	$window.init = function(){
		  var rootApi = 'https://1-dot-theknowledgestory.appspot.com/_ah/api/';
		  
		  gapi.client.load('scoreentityendpoint', 'v1', function() {
			  gapi.client.scoreentityendpoint.listScoreEntity().execute(
	  					function(resp) {
				  $scope.scores = resp.items;
				  $scope.$apply();
				  console.log(resp);
			  });
		  },rootApi);
	    }
	  }
	]);
	  

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
})();

