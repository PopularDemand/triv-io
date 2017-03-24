var trivio = trivio || {};

trivio.controller('TestCtrl', ['$scope', '$window', 'socketService',
  function TestCtrl($scope, $window, socketService) {
    $scope.sendAlert = function() {
      $window.alert('working');
    };

    console.log(socketService);
  }]);