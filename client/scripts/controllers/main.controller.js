'use strict';

angular
  .module('main')
  .controller('mainCtrl', mainCtrl);

function mainCtrl('$scope', $scope) {
  var vm = this;

  angular.extend(vm, {
    function: activate
  });

  activate();

  function activate($scope) {
    $scope.message = "Petra French Bulldogs";
  }
}
