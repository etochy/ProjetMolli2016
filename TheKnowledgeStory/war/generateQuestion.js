(function(){
	var app = angular.module('genQ',[]);
	
	app.controller('customerCtrl', function($scope, $http){
		$http.get().then(function(response){
			$scope.myData = response.data.results;
		});
	});





})();

