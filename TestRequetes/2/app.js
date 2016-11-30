
var app = angular.module('appName',[]);

app.controller('MainController', ['$scope', function($scope) {

    $scope.cookies = 10;

    $scope.eatCookie = function() {
        if ($scope.cookies > 0)
            $scope.cookies--;
    };

}]);
