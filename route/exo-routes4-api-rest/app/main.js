'use strict';

//-------------------------------------------------------------------
// Déclaration de l'application myApp (Module)
// You can think of a module as a container for the different parts 
// of your app – controllers, services, filters, directives, etc.
//-------------------------------------------------------------------
var myApp = angular.module('myApp', [
    // Dépendances du "module" myApp
    'ngRoute',
    'ngResource'
]);

//-------------------------------------------------------------------
// Le Servcice 'ResourceData' 
// qui servira pour tous les types d'objets : User, Facture, Book, ..
//-------------------------------------------------------------------   
myApp.factory('ResourceData', ['$resource', function( $resource ) {
        //ce factory renvoie une function qui peut etre parametré via des parametres
        //et qui créé un objet 'resource' via l'appel du constructeur '$ressource' (sans new)
        return function( url, params, methods) {

              var defaults = {
                update: { method: 'put', isArray: false},
                create: { method: 'post' }
              };
              methods = angular.extend(defaults, methods);
         
              //on créé une instance resource via le constructeur $resource
              //on pourrait l'appeler avec 'new' ca marche aussi
              var resource = $resource(url, params, methods);
         
              //on ajoute une méthode '$save' au prototye
              //on peut tres bien aussi faire resource.$save = ...
             resource.prototype.$save = function() {
               if (!this.id ) {
                 return this.$create();
               }
               else {
                 return this.$update();
               }
             };
              
             //renvoi l'objet resource fraichement créé         
             return resource;
           };
    }]);

//-------------------------------------------------------------------
// Le Servcice 'DataBook' 
//------------------------------------------------------------------- 
myApp.factory('DataBook', ['ResourceData', function(ResourceData) {
     return ResourceData('http://localhost:8080/api/books/:id', {id: '@id'});
   }]);

//-------------------------------------------------------------------
// Configuration du module principal : myApp
//-------------------------------------------------------------------
myApp.config(['$routeProvider', function($routeProvider) { 
   // Système de routage : pour chaque route on définit le 'template' et le 'controller'
   $routeProvider
        .when('/home', {
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl'
        })
        .when('/book/:id?', {
            templateUrl: 'app/book/book.html',
            controller: 'bookCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
