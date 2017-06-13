app.controller('page3Ctrl', function ($scope, $state, $location, $http, $window, SweetAlert, Lightbox, $rootScope) {
    $scope.submitForm = function () {
        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
             //swal("Form Submitted Successfully!!!");
            alert('our form is amazing');
        }
    };
});
