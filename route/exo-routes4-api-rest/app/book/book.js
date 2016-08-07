myApp.controller('bookCtrl', ['$scope', '$routeParams', 'DataBook',  function($scope, $routeParams, DataBook){
	DataBook.get({id:$routeParams.id}).$promise.then(function(data) {
	      $scope.book = data;
	     }, function(error){alert('error');});
    }
]);
