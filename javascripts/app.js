angular.module('kaching', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html',   controller: HomeDetailCtrl}).
      when('/monthly.html', {templateUrl: 'partials/monthly.html',   controller: HomeDetailCtrl}).
      otherwise({redirectTo: '/'});
}]);