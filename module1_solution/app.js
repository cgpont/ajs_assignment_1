(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var numberOfItems = 0;
  $scope.messageDisplayedToUser = "";
  $scope.messageDisplayedToUserClass = "";

  $scope.checkIfTooMuch = function() {
    //Please note that any empty item (i.e., , ,) won't be considered as an item towards to the count.
    numberOfItems = getNumberOfItems($scope.lunchMenuText);
    if (numberOfItems > 0 && numberOfItems < 4) {
        $scope.messageDisplayedToUser = "Enjoy!";
        $scope.messageDisplayedToUserClass = "enjoy";
    } else if (numberOfItems > 3) {
        $scope.messageDisplayedToUser = "Too much!";
        $scope.messageDisplayedToUserClass = "too-much";
    } else {
        $scope.messageDisplayedToUser = "Please enter data first";
        $scope.messageDisplayedToUserClass = "enter-data";
    }
  };

  function getNumberOfItems( text ){
    if (text != undefined && text != ''){
      var arrayOfItems = text.split(',');
      //Please note that any empty item (i.e., , ,) won't be considered as an item towards to the count.
      arrayOfItems.clean(undefined);
      arrayOfItems.clean("");
      numberOfItems = arrayOfItems.length;
    } else {
      numberOfItems = 0;
    }
    return numberOfItems;
  }

  Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
      if (this[i].trim() == deleteValue) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };

}

})();
