angular.module('kaching', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html',   controller: MainLayoutCtrl}).
      when('/monthly.html', {templateUrl: 'partials/monthly.html',   controller: MainLayoutCtrl}).
      when('/gallery.html', {templateUrl: 'partials/gallery.html',   controller: MainLayoutCtrl}).
      when('/scan_receipt.html', {templateUrl: 'partials/scan_receipt.html',   controller: MainLayoutCtrl}).
      when('/purchase_summary.html', {templateUrl: 'partials/purchase_summary.html',   controller: MainLayoutCtrl}).
      otherwise({redirectTo: '/'});
}]);