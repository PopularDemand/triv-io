var trivio = angular.module('trivio', ['firebase', 'ui.router']);

// Routes
trivio.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/home.html'
      })
      .state('room', {
        url: '/room',
        templateUrl: '/views/room.html',
        controller: 'RoomCtrl'
      });
  }]);
