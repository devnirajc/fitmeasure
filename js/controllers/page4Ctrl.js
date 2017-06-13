app.controller('page4Ctrl', function ($scope, $state, $location, $http, $window, SweetAlert, Lightbox, $rootScope, $document) {
    var getValue = function () {
        return $window.sessionStorage.length;
    }

    var getData = function () {
        var json = [];
        $.each($window.sessionStorage, function (i, v) {
            json.push(angular.fromJson(v));
        });
        return json;
    }

    $scope.images = getData();
    $scope.count = getValue();

    $scope.addItem = function (id) {
        var image = document.getElementById('img' + id);
        json = {
            id: id,
            img: image.src
        }
        $window.sessionStorage.setItem(id, JSON.stringify(json));
        $scope.count = getValue();
        $scope.images = getData();
    }

    $scope.removeItem = function (id) {
        $window.sessionStorage.removeItem(id);
        $scope.count = getValue();
        $scope.images = getData();
        swal('Removed with Success!');
    }
});
