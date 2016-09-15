(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var numberOfItems = 0;
  $scope.messageDisplayedToUser = "";

  $scope.checkIfTooMuch = function() {
    if ($scope.lunchMenuText != undefined && $scope.lunchMenuText != ''){
      var arrayOfItems = $scope.lunchMenuText.split(',');
      numberOfItems = arrayOfItems.length;
    } else {
      numberOfItems = 0;
    }
    if (numberOfItems > 0 && numberOfItems < 4) {
        $scope.messageDisplayedToUser = "Enjoy!";
    } else if (numberOfItems > 3) {
        $scope.messageDisplayedToUser = "Too much!";
    } else {
        $scope.messageDisplayedToUser = "Please enter data first";
    }    
  };

}

})();
