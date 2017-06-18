app.controller('bmiCtrl', function ($scope, $state, $location, $http, $window, SweetAlert, Lightbox, $rootScope, $document) {
    $scope.feet = "0 feet";
    $scope.inches = "0 inches";
    $scope.weight = "";
    $scope.weight1 = "";
    $scope.result = "";

    $scope.getBmi = function () {
        $scope.kgtolbs = $scope.weight * 2.20462;
        $scope.step1 = $scope.kgtolbs * 0.45;
        $scope.confeettoinch = ($scope.feet * 12) + $scope.inches;
        $scope.step2 = $scope.confeettoinch * 0.025;
        $scope.step3 = $scope.step2 * 2;
        return $scope.finalbmi = $scope.step1 / $scope.step3;


        /* BMI = weight(kg) / height2(m2)(Metric Units)
           BMI = 703· weight(lb) / height2(in2)(U.S.Units)*/
        /*Underweight: Your BMI is less than 18.5. Healthy weight: Your BMI is 18.5 to 24.9. Overweight: Your BMI is 25 to 29.9. Obese: Your BMI is 30 or higher.*/
    }

    $scope.getbmicategory = function () {
        if ($scope.finalbmi < 18.5) {
            return $scope.result = "Underweight";
        } else if ($scope.finalbmi >= 18.5 && $scope.finalbmi <= 24.9) {
            return $scope.result = "Healthy Weight";
        } else if ($scope.finalbmi >= 25 && $scope.finalbmi <= 29.9) {
            return $scope.result = "Overweight";
        } else if ($scope.finalbmi >= 30) {
            return $scope.result = "Obese";
        }
        $scope.toggle = true;
    }

    $scope.metricconverter = function () {
        return $scope.metric_lbs = $scope.weight1 * 2.20462;
    }
});
