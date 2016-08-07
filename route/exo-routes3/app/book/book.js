// Contrôleur de la page Book
// Il faut injecter le server $routeParams pour pouvoir récupérer l'id du book

myApp.controller('bookCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams){
        $scope.message = "Bienvenue sur la page d'un Book : "+$routeParams.id;
    }
]);
