trivio.controller('RoomCtrl', ['$scope', 'socketService', function($scope, socketService) {

  var socket = socketService();

  socket.on('question', function() {
    console.log('got a question');
  });

  $scope.$on('$stateChangeStart', function() {
    console.log('state change');
    _stateChange();
  });

  var _stateChange  = function() {
    socket.emit('disconnect');
  };

}]);