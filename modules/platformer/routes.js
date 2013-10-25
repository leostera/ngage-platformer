angular.module('platformer')
.config(['$routeProvider', '$locationProvider'
, function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      controller: 'level1',
      template: require('./views/level1')
    })
    .otherwise({
      redirectTo: '/'
    });
}]);