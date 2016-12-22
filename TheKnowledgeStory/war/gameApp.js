(function(){
  var app = angular.module('game', []);
  var step = 0;

  app.controller('QuestionController', function(){
    this.products = questions;
  });

  app.controller('EcuyerController', function(){
    this.products = parlotes;
  });

  app.controller('PointvieController', function(){
    this.products = pointvies;
  });

  app.controller('SorciereController', function(){
    this.products = parlotesSorciere;
  });

 

  var pointvies = [
    {
      monstre :"La sorciere (Ze Wissch)",
      pointvie : 5
    },
    {
      monstre :"Le nain (Ze Douarfe)",
      pointvie : 6
    },
    {
      monstre :"Le paysan (Ze Farmeur)",
      pointvie : 3
    },
    {
      monstre :"The Big boss (Ze grosse bosse)",
      pointvie : 10
    }
  ]

  var parlotesSorciere = [

    {
      parlote : "Sacre Bleue !"
    },
    {
      parlote : "Attends, ça charge"
    },
    {
      parlote : "Tu ne serais pas mon petit-fils ?"
    },
    {
      parlote : "Tu veux une pomme ?"
    },
    {
      parlote : " @#!$ "
    },
    {
      parlote : "Mes vieux os !"
    },
    {
      parlote : "Keskidi ?"
    }
  ]




  var parlotes = [

    {
      parlote : "Tu aimes les sushis ? "
    },
    {
      parlote : "La réponse D"
    },
    {
      parlote : "Stéphanie de Monaco !"
    },
    {
      parlote : "Jeanne !"
    },
    {
      parlote : "Comment est ce que ... "
    },
    {
      parlote : "Test 1 2    1 2"
    },
    {
      parlote : "Pourrr le roi !"
    }
  ]

  function GenRand(){
    var randP = Math.floor(Math.random() * parlotes.length)
  }




  var questions = [
    {
      theme : "Histoire",
      question: "Quel est la couleur du cheval blanc d'Henry IV ? ",
      reponse: "Blanc",
      f1 : "Jaune",
      f2 : "Marron",
      f3 : "Noire",
    },
    {
      theme : "Hisoire",
      question: "Où est mort la princesse Diana ?",
      reponse: "Paris",
      f1 : "Vietnam",
      f2 : "Londres",
      f3 : "New York",
    },
    {
      theme : "Guerre et bataille",
      question: "Qui a gagné la seconde guerre mondiale? ",
      reponse: "Les Alliés",
      f1 : "l'Axe",
      f2 : "Rexona",
      f3 : "le Comon Wealth",
    },
    {
      theme : "Histoire",
      question: "Quel est le nom de la reine d'angleterre ? ",
      reponse: "Elisabeth",
      f1 : "Victoria",
      f2 : "Catherine",
      f3 : "Diane",
    }
    ]

  })();
