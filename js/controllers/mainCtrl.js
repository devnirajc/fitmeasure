app.controller('mainCtrl', function ($scope, $state, $http, $window, SweetAlert, Lightbox, $rootScope) {
    $scope.salary = 0;
    $scope.percentage = 0;
    $scope.result = function () {
        return $scope.salary * $scope.percentage * 0.01;
    };

});