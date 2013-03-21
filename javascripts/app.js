var app = angular.module('kaching', []).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl: 'partials/home.html',   controller: RouteCtrl}).
	when('/monthly.html', {templateUrl: 'partials/monthly.html',   controller: RouteCtrl}).
	when('/gallery.html', {templateUrl: 'partials/gallery.html',   controller: RouteCtrl}).
	when('/scan_receipt.html', {templateUrl: 'partials/scan_receipt.html',   controller: RouteCtrl}).
	when('/scan_item.html', {templateUrl: 'partials/scan_item.html',   controller: RouteCtrl}).
	when('/purchase_summary.html', {templateUrl: 'partials/purchase_summary.html',   controller: RouteCtrl}).
	otherwise({redirectTo: '/'});
}]);

app.run(function ($rootScope) {
	$rootScope.user =
	{
		'name': 'test user',
		'monthly_budget': 200.00,
		'total_budget':500.00
	};

	$rootScope.asd=[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];

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
		'item_images': [],
		'gst': 0.00,
		'scharge': 0,
		'total': 49.47
	}, {
		'name': 'A15 Clothing',
		'date': '19-10-2012',
		'location': '2050 Deptford Center Rd',
		'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R3.png',
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
		'item_images': [],
		'gst': 8.71,
		'scharge': 0,
		'total': 95.80
	}, {
		'name': 'North Charleston',
		'date': '29-10-2008',
		'location': '5461 Rivers Avenue',
		'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R2.png',
		'items': [{
			'name': 'LBS Textiles',
			'quantity': '1',
			'price': 19.28
		}],
		'item_images': [],
		'gst': 0.00,
		'scharge': 0,
		'total': 19.28
	}];

	$rootScope.receipts =
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
		'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S2.png'
	}],
		'gst': 0.00,
		'scharge': 0,
		'total': 49.47
	}
	// , {
	// 	'name': 'A15 Clothing',
	// 	'date': '19-10-2012',
	// 	'location': '2050 Deptford Center Rd',
	// 	'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R3.png',
	// 	'items': [{
	// 		'name': 'Trousers',
	// 		'quantity': '1',
	// 		'price': 18.00
	// 	}, {
	// 		'name': 'Suit Jacket',
	// 		'quantity': '1',
	// 		'price': 45.90
	// 	}, {
	// 		'name': 'Shirt',
	// 		'quantity': '1',
	// 		'price': 31.90
	// 	}],
	// 	'item_images': [{
	// 	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S5.png'
	// }],
	// 	'gst': 8.71,
	// 	'scharge': 0,
	// 	'total': 95.80
	// }, {
	// 	'name': 'North Charleston',
	// 	'date': '29-10-2008',
	// 	'location': '5461 Rivers Avenue',
	// 	'image_url': 'https://dl.dropbox.com/u/3179945/kaching/Receipt%20%28191%20x%20468%29/R2.png',
	// 	'items': [{
	// 		'name': 'LBS Textiles',
	// 		'quantity': '1',
	// 		'price': 19.28
	// 	}],
	// 	'item_images': [{
	// 	'url' : 'https://dl.dropbox.com/u/3179945/kaching/Single%20%28105%20x%20222%29/S3.png'
	// }],
	// 	'gst': 0.00,
	// 	'scharge': 0,
	// 	'total': 19.28
	// }
	];

	$rootScope.chosen_receipt = null;

	// $rootScope.decipher = function() {
	// 	$('#decipher').show();
	// 	$(location).delay(3000).attr('href',"#/purchase_summary.html");

	// 	$rootScope.chosen_receipt = $rootScope.all_receipts[0];
	// };

	$rootScope.saveReceipt = function(r) {
		var hasReceipt = false;
		for (var i in $rootScope.receipts) {
			var re = $rootScope.receipts[i];
			if (r.name == re.name){
				$rootScope.receipts[i] = r;
				hasReceipt = true;
			}
		}

		if (!hasReceipt){
			$rootScope.receipts.unshift(r);
		}

		// for (var i=0;i<$rootScope.all_receipts.length;i++) {
		// 	item = all_receipts[i];
		// 	if (r.name == item.name){
		// 		$rootScope.all_receipts.remove(i);
		// 	}
		// }

		// console.log($rootScope.all_receipts);
	};

	$rootScope.getTotalSpent = function() {
		var sum = 0;
		$.each($rootScope.receipts,function(index) {
			var item = $rootScope.receipts[index];
			sum += item.total;
		});
		$rootScope.total_spent = Math.round(sum*100)/100;
		return $rootScope.total_spent;
	};

	$rootScope.add_photo = function(url) {
		var entry = {'url' : url}
		$rootScope.chosen_receipt.item_images.unshift(entry);
		$(".modal-footer .btn").click();
		console.log($rootScope.chosen_item_photo);
		if($("#main").children().length == 0){
			$("#main").append("<img src='"+url+"'/>");
		} else {
			var mainURL = $("#main").children().attr("src");
			if($("#2nd").children().length == 0){
				$("#main").children().remove();
				$("#main").append("<img src='"+url+"'/>");		
				$("#2nd").append("<img src='"+mainURL+"'/>");		
			} else {
				var firstURL = $("#2nd").children().attr("src");
				$("#main").children().remove();
				$("#2nd").children().remove();
				$("#main").append("<img src='"+url+"'/>");		
				$("#2nd").append("<img src='"+firstURL+"'/>");		
				$("#3rd").append("<img src='"+mainURL+"'/>");							
			}
		}
		
		//disable both scan and library button
		if($("#3rd").children().length > 0){
			$("#libButton").addClass("disabled");
			$("#libButton").removeAttr("href");
			$("#scanButton").addClass("disabled");
			$("#scanButton").removeAttr("href");
		}
	};
	
	$rootScope.take_photo = function(url) {
		if($("#main").children().length == 0){
			$("#main").append("<img src='"+url+"'/>");
		} else {
			var mainURL = $("#main").children().attr("src");
			if($("#2nd").children().length == 0){
				$("#main").children().remove();
				$("#main").append("<img src='"+url+"'/>");		
				$("#2nd").append("<img src='"+mainURL+"'/>");		
			} else {
				var firstURL = $("#2nd").children().attr("src");
				if($("#3rd").children().length == 0){
				$("#main").children().remove();
				$("#2nd").children().remove();
				$("#main").append("<img src='"+url+"'/>");		
				$("#2nd").append("<img src='"+firstURL+"'/>");		
				$("#3rd").append("<img src='"+mainURL+"'/>");	
				}
			}
		}
		
		//disable both scan and library button
		if($("#3rd").children().length > 0){
			$("#libButton").addClass("disabled");
			$("#libButton").removeAttr("href");
			$("#scanButton").addClass("disabled");
			$("#scanButton").removeAttr("href");
		}
	};

	$rootScope.random_receipt = function() {
		var randomNum = Math.floor(Math.random()*$rootScope.all_receipts.length);
		$rootScope.chosen_receipt = $rootScope.all_receipts[randomNum];
	};

	$rootScope.setReceipt = function(r) {
		console.log("Function");
		console.log(r);
		$rootScope.chosen_receipt = r;
	};

	$rootScope.load_item_photo = function() {
		for (var index in $rootScope.chosen_receipt.item_images){
			$rootScope.add_photo($rootScope.chosen_receipt.item_images[index].url);
		}
	};

	$rootScope.random_item_photo = function() {
		var randomNum = Math.floor(Math.random()*$rootScope.photo_lib.length);
		$rootScope.chosen_item_photo = $rootScope.photo_lib[randomNum];
	};

	$rootScope.getMonthSpendPlot = function() {
		//cumulative
		var arr = [];
		var sum = 0;
		arr.push(0);
		$.each($rootScope.receipts,function(index) {
			var item = $rootScope.receipts[index];
			sum += item.total;
			arr.push(sum);
		});
		return arr;
	};

	$rootScope.getMonthBudgetPlot = function() {
		var arr = [];
		arr.push($rootScope.user.monthly_budget);
		$.each($rootScope.receipts,function(index) {
			// var item = $rootScope.receipts[index];
			arr.push($rootScope.user.monthly_budget);
		});
		return arr;
	};

	$rootScope.getRemainMonthly = function() {
		return Math.round((user.monthly_budget - getTotalSpent()) * 100) / 100;
	};

	// $rootScope.getMonthExpenditure(){
	// 	var arr = [];
	// 	// for(int i)

	// };
});