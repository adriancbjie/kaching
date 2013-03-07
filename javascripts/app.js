var app = angular.module('kaching', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html',   controller: RouteCtrl}).
      when('/monthly.html', {templateUrl: 'partials/monthly.html',   controller: RouteCtrl}).
      when('/gallery.html', {templateUrl: 'partials/gallery.html',   controller: RouteCtrl}).
      when('/scan_receipt.html', {templateUrl: 'partials/scan_receipt.html',   controller: RouteCtrl}).
      when('/purchase_summary.html', {templateUrl: 'partials/purchase_summary.html',   controller: RouteCtrl}).
      otherwise({redirectTo: '/'});
}]);

app.run(function ($rootScope) {

	$rootScope.user =
	{
		'name': 'test user',
		'monthly_budget': 200.00
	};
	
	$rootScope.all_receipts =
	[{
	    'name': 'WATAMI Japanese Casual Restaurant',
	    'date': '2013-02-01',
	    'location': 'Raffles City',
	    'image': 'https://dl.dropbox.com/u/3179945/kaching/receipt_1.jpg',
	    'items': [{
	        'name': 'Tokyo Gyudon',
	        'quantity': '2',
	        'price': 19.6
	    }, {
	        'name': 'Sukiyaki Nabe',
	        'quantity': '1',
	        'price': 16.8
	    }, {
	        'name': 'Butechige Nabe',
	        'quantity': '1',
	        'price': 16.8
	    }, {
	        'name': 'Ishiyaki tsutamina don',
	        'quantity': '1',
	        'price': 11.8
	    }, {
	        'name': 'Matcha Parfait',
	        'quantity': '1',
	        'price': 6.8
	    }],
	    'gst': 5.53,
	    'scharge': 7.18,
	    'total': 84.5
	}, {
	    'name': 'Zirong Trading',
	    'date': '30-01-2013',
	    'location': 'Serangoon N Ave 2',
	    'image': 'https://dl.dropbox.com/u/3179945/kaching/receipt_2.jpg',
	    'items': [{
	        'name': '3x3 stick on x100 pieces',
	        'quantity': '2',
	        'price': 1.2
	    }, {
	        'name': 'stick on 3x4',
	        'quantity': '2',
	        'price': 1.5
	    }, {
	        'name': 'Zebra name pen black',
	        'quantity': '5',
	        'price': 1.3
	    }],
	    'gst': 0,
	    'scharge': 0,
	    'total': 11.9
	}, {
	    'name': 'Home N Office Products',
	    'date': '30-01-2013',
	    'location': 'Serangoon N Ave 2',
	    'image': 'https://dl.dropbox.com/u/3179945/kaching/receipt_3.jpg',
	    'items': [{
	        'name': 'Zebra Permanent Marker',
	        'quantity': '1',
	        'price': 1.2
	    }],
	    'gst': 0.05,
	    'scharge': 0,
	    'total': 1.25
	}];

	$rootScope.receipts =
	[{
	    'name': 'Home N Office Products',
	    'date': '30-01-2013',
	    'location': 'Serangoon N Ave 2',
	    'image': 'https://dl.dropbox.com/u/3179945/kaching/receipt_3.jpg',
	    'items': [{
	        'name': 'Zebra Permanent Marker',
	        'quantity': '1',
	        'price': 1.2
	    }],
	    'gst': 0.05,
	    'scharge': 0,
	    'total': 1.25
	}];

	$rootScope.chosen_receipt = null;

	$rootScope.decipher = function() {
		$('#decipher').show();
		$(location).delay(3000).attr('href',"#/purchase_summary.html");

		$rootScope.chosen_receipt = $rootScope.all_receipts[0];
	};

	$rootScope.saveReceipt = function(r) {
		var hasReceipt = false;
		$rootScope.receipts.push(r);
		console.debug($rootScope.receipts);
	};

	$rootScope.getTotalSpent = function() {
		$rootScope.total_spent = 0;
		$.each($rootScope.receipts,function() {
		    $rootScope.total_spent += this.total;
			console.debug(this.total);
		});
	};
});