(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope){


}

$scope.checkNumberOfItems = function() {
      $scope.numberOfItems = 666;
};

})();
