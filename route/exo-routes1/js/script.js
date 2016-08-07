// js/script.js
'use strict';

/**
 * Déclaration de l'application routeApp
 */
var myApp = angular.module('myApp', [
    // Dépendances du "module"
    'ngRoute',
    'mainCtrl'
]);

/**
 * Configuration du module principal : myApp
 */
myApp.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/contact/:msg?', {
            templateUrl: 'partials/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);

/**
 * Définition des contrôleurs
 */

 // Contrôleur général
var mainCtrl = angular.module('mainCtrl', []);

// Contrôleur de la page d'accueil
myController.controller('homeCtrl', ['$scope',
    function($scope){
        $scope.message = "Bienvenue sur la page d'accueil";
    }
]);


// Contrôleur de la page de contact
myController.controller('contactCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "Laissez-nous un message sur la page de contact !";
        // Si aucun paramètre n'est passé, on met notre phrase initiale
        $scope.msg = $routeParams.msg || "Bonne chance pour cette nouvelle appli !";
    }
]);