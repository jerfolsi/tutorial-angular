//-----------------------------------------------------------
// Module 'myApplication'
//-----------------------------------------------------------
var myApplication = angular.module('myApplication', ['mySharedElements']);
myApplication.controller('MainCtrl', ['$scope', function($scope){
        this.test = 'hello';
    }]);

//-----------------------------------------------------------
// Module 'mySharedElements'
//-----------------------------------------------------------
var mySharedElements = angular.module("mySharedElements", []);
mySharedElements.directive("myDirective", function () {
    return {
        restrict: "A",
        transclude: true,
        template: "<div style='background-color:red' ng-transclude></div>",
    };
});