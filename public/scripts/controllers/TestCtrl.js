var trivio = trivio || {};

trivio.controller('TestCtrl', ['$scope', '$window',
  function TestCtrl($scope, $window) {
    $scope.sendAlert = function() {
      $window.alert('working');
    }
  }])