// Contrôleur de la page de contact
myController.controller('contactCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "Laissez-nous un message sur la page de contact !";
        // Si aucun paramètre n'est passé, on met notre phrase initiale
        $scope.msg = $routeParams.msg || "Bonne chance pour cette nouvelle appli !";
    }
]);