(function(){
  var app = angular.module('rpg', []);

  app.controller('questionController', function(){
    this.products = questions;
  });

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
