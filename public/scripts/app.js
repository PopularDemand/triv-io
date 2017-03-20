var trivio = angular.module('trivio', ['firebase', 'ui.router']);

// Routes
trivio.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views'
      })
  }])
