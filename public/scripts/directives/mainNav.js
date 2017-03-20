var trivio = trivio || {};

trivio.directive('mainNav', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: '/views/directives/main-nav.html'
  };
});