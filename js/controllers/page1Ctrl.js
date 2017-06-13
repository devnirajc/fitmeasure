app.controller('page1Ctrl', function ($scope, $state, $location, $http, $window, SweetAlert, Lightbox, $rootScope) {
    /*$scope.currentNavItem = 'page1';*/
    $scope.items = [
        {
            Name: "Soap",
            Price: "25",
            Quantity: "10"
        },
        {
            Name: "Bag",
            Price: "100",
            Quantity: "15"
        },
        {
            Name: "Pen",
            Price: "15",
            Quantity: "13"
        }
];
});
