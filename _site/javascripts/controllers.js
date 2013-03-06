function MainLayoutCtrl($scope, $routeParams) {

  $scope.receipts =
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
}