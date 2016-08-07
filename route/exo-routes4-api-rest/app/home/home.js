// Contrôleur de la page d'accueil
myApp.controller('homeCtrl', ['$scope',  'DataBook', function($scope,  DataBook){
    $scope.message = "List of books : ";

	//GET : bookList
	DataBook.get().$promise.then(function(data) {
	      $scope.books = data.list;
	      }, function(error){alert('error');});
    }
]);
