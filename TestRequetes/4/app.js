
var CLIENT = '1224288783-vd0m0m0ii5sorrva3c250h232koipvhc.apps.googleusercontent.com';

var app = angular.module('appName',['angular-google-gapi']);

app.run(['GAuth', function(GAuth) {

    GAuth.setClient(CLIENT);
    GAuth.setScope('https://www.googleapis.com/auth/userinfo.profile');

    GAuth.load();

}]);

app.controller('MainController', ['$scope','GAuth', function($scope, GAuth) {

    $scope.user = null;

    $scope.login = function() {
        GAuth.login().then(function(user) {
            $scope.user = user;
            console.log(user);
        }, function() {
            console.log("Oups! Failure to connect...");
        });
    };

}]);
