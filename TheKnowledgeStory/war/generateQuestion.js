(function(){
	var app = angular.module('genQ',[]);

	app.controller('customerCtrl', function($scope, $http){
		$http.get('batailles.json').then(function(response){
			$scope.myData = response.data.results;
			
			for(var i=0; i<$scope.myData.length; i++){
				console.log($scope.myData[i].nomlabel);
			}
			
		});
	});

