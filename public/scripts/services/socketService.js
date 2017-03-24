trivio.factory('socketService', ['$window', function($window) {
  return $window.io;
}]);