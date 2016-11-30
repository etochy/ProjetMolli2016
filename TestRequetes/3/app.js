
var BASE = 'https://angulargapidemo.appspot.com/_ah/api';

var app = angular.module('appName',['angular-google-gapi']);

app.run(['GApi', function(GApi) {

    GApi.load('example','v1',BASE).then(
        function(resp) {
            console.log('Connected to the API!')
        },
        function(resp) {
            console.log('Oups! Error while connecting to the API!');
        }
    );

}]);

app.controller('MainController', ['$scope', 'GApi', function($scope, GApi) {

    $scope.random = {
        dice: null,
        number: null
    };

    $scope.randomDice = function() {
        GApi.execute('example','apiEndpoint.getRandomDice').then(
            function(resp) {
                $scope.random.dice = resp.random;
            },
            function() {
                console.log('Oh no! Error while querying the API!');
            }
        );
    };

    $scope.range = {
        min: 0,
        max: 100
    };

    $scope.randomNumber = function() {
        GApi.execute('example','apiEndpoint.getRandomNumber',{min: $scope.range.min, max: $scope.range.max}).then(
            function(resp) {
                $scope.random.number = resp.random;
            },
            function() {
                console.log('Oh no! Error while querying the API!');
            }
        );
    };

}]);
