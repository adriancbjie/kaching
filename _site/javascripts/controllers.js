function MainLayoutCtrl($scope, $routeParams) {

  $scope.receipt = {
    name: 'WATAMI Japanese Casual Restaurant',
    date: '2013-02-01',
    location: 'Raffles City',
    items: [
      {'name':'Tokyo Gyudon', quantity: '2', price:19.6},
      {name:'Sukiyaki Nabe', quantity: '1', price:16.8},
      {name:'Butechige Nabe', quantity: '1', price:16.8},
      {name:'Ishiyaki tsutamina don', quantity: '1', price:11.8},
      {name:'Matcha Parfait', quantity: '1', price:6.8}
    ],
    gst: 5.53,
    scharge: 7.18,
    total: 84.5
  };
}