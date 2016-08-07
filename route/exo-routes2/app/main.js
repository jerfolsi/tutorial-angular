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
myApp.config(['$routeProvider', function($routeProvider) { 
        
        // Système de routage : pour chaque route on définit le 'template' et le 'controller'
        $routeProvider
        .when('/home', {
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl'
        })
        .when('/contact/:msg?', {
            templateUrl: 'app/contact/contact.html',
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

