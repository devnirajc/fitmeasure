app.controller('page2Ctrl', function ($scope, $state, $location, $http, $window, SweetAlert, Lightbox, $rootScope) {
    $http.get('http://rest-service.guides.spring.io/greeting').
    then(function (response) {
        $scope.greet = response.data;
    });
});
