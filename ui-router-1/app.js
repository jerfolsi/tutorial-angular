/*

*/

'use strict';

var App = angular.module('routingDemoApp',['ui.router']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

		// For any unmatched url, send to /business
		$urlRouterProvider.otherwise("/business")
				

		$stateProvider
				/* 'Business page' contains 'Nested views' */
				.state('business', {
					url: "/business",
					templateUrl: "business.html"
				})
				.state('business.products', {
					url: "/products",
					templateUrl: "products.html",
					controller: function($scope){
						$scope.products = ["Computer", "Printers", "Phones", "Bags"];
					}
				})
				.state('business.services', {
					url: "/services",
					templateUrl: "services.html",
					controller: function($scope){
						$scope.services = ["Selling", "Support", "Delivery", "Reparation"];
					}
				})


				/* Portfolio page contains multiple named views. */
				.state('portfolio', {
					url: "/portfolio",
					views: {
						"" 	:    { templateUrl: "portfolio.html" },
						"view1@portfolio": { template: "Write whatever you want, it's your virtual company." },
						"view2@portfolio": { templateUrl: "clients.html" ,
							controller: function($scope){
									$scope.clients = ["HP", "IBM", "MicroSoft"];
							}
						}
					}
				})
	}]);
