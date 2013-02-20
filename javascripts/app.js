angular.module('kaching', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html',   controller: HomeDetailCtrl}).
      when('/kaching/monthly.html', {templateUrl: 'partials/monthly.html',   controller: HomeDetailCtrl}).
      // when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/'});
}]);