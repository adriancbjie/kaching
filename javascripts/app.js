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

	$rootScope.photo_lib = 
	[{
    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S1.png'
    }, {
    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S2.png'
    }, {
    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S3.png'
    }, {
    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S4.png'
    }, {
    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S5.png'
    }, {
    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G5.png'
    }, {
    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G4.png'
    }, {
    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G3.png'
    }];
	
	$rootScope.all_receipts =
	[{
	    'name': 'Deptford Clothing',
	    'date': '11-12-2011',
	    'location': '1750 Deptford Center Rd',
	    'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R1.png',
	    'items': [{
	        'name': 'tnk - corset sld prnt',
	        'quantity': '1',
	        'price': 4.99
	    }, {
	        'name': 'Glitter Ballet Flat Blue',
	        'quantity': '1',
	        'price': 19.50
	    }, {
	        'name': 'swtr - spc dye poncho',
	        'quantity': '1',
	        'price': 14.99
	    }, {
	        'name': 'Emma vneck crop ls',
	        'quantity': '1',
	        'price': 9.99
	    }],
	    'item_images': [{
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S1.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S2.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S3.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S4.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S5.png'
	    }{
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G5.png'
	    }],
	    'gst': 0.00,
	    'scharge': 0,
	    'total': 49.47
	}, {
	    'name': 'A15 Clothing',
	    'date': '19-10-2012',
	    'location': '2050 Deptford Center Rd',
	    'image': 'https://dl.dropbox.com/u/3179945/kaching/receipt_5.jpg',
	    'items': [{
	        'name': 'Trousers',
	        'quantity': '1',
	        'price': 18.00
	    }, {
	        'name': 'Suit Jacket',
	        'quantity': '1',
	        'price': 45.90
	    }, {
	        'name': 'Shirt',
	        'quantity': '1',
	        'price': 31.90
	    }],
	    'item_images': [{
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S1.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S2.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S3.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S4.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S5.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G5.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G4.png'
	    }, {
	    	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Group%202%20%28222%20x%20192%29/G3.png'
	    }],
	    'gst': 8.71,
	    'scharge': 0,
	    'total': 95.80
	}, {
	    'name': 'North Charleston',
	    'date': '29-10-2008',
	    'location': '5461 Rivers Avenue',
	    'image': 'https://dl.dropbox.com/u/3179945/kaching/receipt_6.jpg',
	    'items': [{
	        'name': 'LBS Textiles',
	        'quantity': '1',
	        'price': 19.28
	    }],
	    'gst': 0.00,
	    'scharge': 0,
	    'total': 19.28
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