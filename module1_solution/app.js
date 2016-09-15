(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var numberOfItems = 0;
  $scope.messageDisplayedToUser = "";

  $scope.checkIfTooMuch = function() {
    numberOfItems = getNumberOfItems($scope.lunchMenuText);
    if (numberOfItems > 0 && numberOfItems < 4) {
        $scope.messageDisplayedToUser = "Enjoy!";
    } else if (numberOfItems > 3) {
        $scope.messageDisplayedToUser = "Too much!";
    } else {
        $scope.messageDisplayedToUser = "Please enter data first";
    }
  };

  function getNumberOfItems( text ){    
    if (text != undefined && text != ''){
      var arrayOfItems = text.split(',');
      numberOfItems = arrayOfItems.length;
    } else {
      numberOfItems = 0;
    }
    return numberOfItems;
  }

}

})();
