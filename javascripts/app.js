angular.module('kaching', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html',   controller: MainLayoutCtrl}).
      when('/monthly.html', {templateUrl: 'partials/monthly.html',   controller: MainLayoutCtrl}).
      otherwise({redirectTo: '/'});
}]);