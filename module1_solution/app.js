(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope){
  $scope.numberOfItems = 0;
}

$scope.checkNumberOfItems = function() {
  $scope.numberOfItems = 666;
};

})();
