
var Question = "prefix prop-fr:<http://fr.dbpedia.org/property/>"+
"prefix dbpedia-owl:<http://dbpedia.org/ontology/>"+
"prefix rdfs:<http://www.w3.org/2000/01/rdf-schema#>"+
"prefix rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>"+

"select distinct ?nomlabel ?debut ?fin ?lieu ?combattant where {"+
	"?nom prop-fr:guerre ?guerre . "+
	"?nom prop-fr:conflit ?conflit . "+
	"filter (!regex(?nom, \"bataille\", \"i\")) . "+
	"filter (!regex(?nom, \"combat\", \"i\")) .  "+
	"filter (!regex(?nom, \"siège\", \"i\")) . "+
	"filter (!regex(?nom, \"attentat\", \"i\")) ."+ 
	"filter (!regex(?nom, \"libération\", \"i\")) ."+ 
	"?nom dbpedia-owl:startDate ?debut ; "+
		"dbpedia-owl:endDate ?fin ; "+
		"prop-fr:combattants ?combattants ."+
	
	"?combattants rdfs:label ?combattant ."+
	"filter langMatches( lang(?combattant), \"FR\" ) ."+
	"filter (regex(?combattants, \"dbpedia\", \"i\")) . "+
	"filter (!regex(?combattants, \"fichier\", \"i\")) ."+
	"?nom rdfs:label ?nomlabel ."+
	"filter langMatches( lang(?nomlabel), \"FR\" )."+
	"{"+
	"	?nom prop-fr:lieu ?lieu ."+
	"	filter (!regex(?lieu, \"http\", \"i\")) ."+
	"}"+
	"UNION"+
	"{"+
	"	?nom prop-fr:lieu ?temp ."+
	"	?temp rdfs:label ?lieu ."+
	"	filter langMatches(lang(?lieu), \"FR\")."+
	"}"+
"}";

var urlReq = "http://fr.dbpedia.org/sparql?default-graph-uri=&query=prefix+prop-fr%3A%3Chttp%3A%2F%2Ffr.dbpedia.org%2Fproperty%2F%3E%0D%0Aprefix+dbpedia-owl%3A%3Chttp%3A%2F%2Fdbpedia.org%2Fontology%2F%3E%0D%0Aprefix+rdfs%3A%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0Aprefix+rdf%3A%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0A%0D%0Aselect+distinct+%3Fnomlabel+%3Fdebut+%3Ffin+%3Flieu+%3Fcombattant+where+%7B%0D%0A%09%3Fnom+prop-fr%3Aguerre+%3Fguerre+.+%0D%0A%09%3Fnom+prop-fr%3Aconflit+%3Fconflit+.+%0D%0A%09filter+%28%21regex%28%3Fnom%2C+%22bataille%22%2C+%22i%22%29%29+.+%0D%0A%09filter+%28%21regex%28%3Fnom%2C+%22combat%22%2C+%22i%22%29%29+.++%0D%0A%09filter+%28%21regex%28%3Fnom%2C+%22si%C3%A8ge%22%2C+%22i%22%29%29+.+%0D%0A%09filter+%28%21regex%28%3Fnom%2C+%22attentat%22%2C+%22i%22%29%29+.+%0D%0A%09filter+%28%21regex%28%3Fnom%2C+%22lib%C3%A9ration%22%2C+%22i%22%29%29+.+%0D%0A%09%3Fnom+dbpedia-owl%3AstartDate+%3Fdebut+%3B+%0D%0A%09%09dbpedia-owl%3AendDate+%3Ffin+%3B+%0D%0A%09%09prop-fr%3Acombattants+%3Fcombattants+.%0D%0A%09%0D%0A%09%3Fcombattants+rdfs%3Alabel+%3Fcombattant+.%0D%0A%09filter+langMatches%28+lang%28%3Fcombattant%29%2C+%22FR%22+%29+.%0D%0A%09filter+%28regex%28%3Fcombattants%2C+%22dbpedia%22%2C+%22i%22%29%29+.+%0D%0A%09filter+%28%21regex%28%3Fcombattants%2C+%22fichier%22%2C+%22i%22%29%29+.%0D%0A%09%3Fnom+rdfs%3Alabel+%3Fnomlabel+.%0D%0A%09filter+langMatches%28+lang%28%3Fnomlabel%29%2C+%22FR%22+%29.%0D%0A%09%7B%0D%0A%09%09%3Fnom+prop-fr%3Alieu+%3Flieu+.%0D%0A%09%09filter+%28%21regex%28%3Flieu%2C+%22http%22%2C+%22i%22%29%29+.%0D%0A%09%7D%0D%0A%09UNION%0D%0A%09%7B%0D%0A%09%09%3Fnom+prop-fr%3Alieu+%3Ftemp+.%0D%0A%09%09%3Ftemp+rdfs%3Alabel+%3Flieu+.%0D%0A%09%09filter+langMatches%28lang%28%3Flieu%29%2C+%22FR%22%29.%0D%0A%09%7D%0D%0A%7D%0D%0A&format=text%2Fhtml&timeout=0&debug=on";


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