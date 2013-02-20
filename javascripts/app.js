angular.module('kaching', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html',   controller: MainLayoutCtrl}).
      when('/monthly.html', {templateUrl: 'partials/monthly.html',   controller: MainLayoutCtrl}).
      when('/scan_receipt.html', {templateUrl: 'partials/scan_receipt.html',   controller: MainLayoutCtrl}).
      otherwise({redirectTo: '/'});
}]);