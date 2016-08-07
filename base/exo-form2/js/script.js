
'use strict';

/*
* On créer un module(Application) Global qui va dependre d'un module Recette
*/
var appGlboale = angular.module('appGlobale', [
	//dependencies
	'moduleRecette']);

/*
	On créé un module (moduleRecette) auquel on va attacher un controller
	Ce module est utilisée par le module principal (Application)
*/
var moduleRecette = angular.module('moduleRecette', []);

moduleRecette.controller('recetteCtrl', ['$scope', 
	function($scope){


		$scope.listIngredients = new Array();
		$scope.listIngredients.push({name:'salt', selected:false});

		$scope.addIngredient = function(){
			$scope.listIngredients.push({name:$scope.newIngredient, selected:false});
			$scope.newIngredient = "";
		}

		$scope.addSalt = function(){
			$scope.listIngredients.push({name:'salt', selected:false});
		}

		$scope.deleteSelection = function(){
			var listTemp = [];
			for(var i=0;i<$scope.listIngredients.length;i++)
			{
			
				var ingredient = $scope.listIngredients[i];
				if(!ingredient.selected)
					listTemp.push(ingredient); 
			}
			$scope.listIngredients = listTemp;
		}
		
		$scope.reverseSelection = function(){
			//on peut directement appeler la fonction forEach sur un Array
			$scope.listIngredients.forEach(function(ingredient){
				ingredient.selected = !ingredient.selected;
			//	window.alert('e');
			});
		}
	}]);