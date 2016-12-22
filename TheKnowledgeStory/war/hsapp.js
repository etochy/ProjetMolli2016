(function(){
	var app = angular.module('highscore',[]);
	  app.controller('ScoreController', ['$scope','$window', function($scope, $window){
		    
	  $window.init = function(){
		  var rootApi = 'http://1-dot-theknowledgeknight.appspot.com/_ah/api/';
		  gapi.client.load('scoreentityendpoint','v1', function(){
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

