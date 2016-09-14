angular.module('ionicApp', ['ionic']).controller('MyCtrl', function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('templates/modal_number_keyboard.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modalNumberKeyboard = modal;
    });

    $scope.ee = {"code": ""};
    $scope.currentNumber = "";
    $scope.num = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 0,
        "k": ".",
        "l": "R",
        "m": "C"
    };
    $scope.doInput = function (n) {
        if (n == "R") {
            $scope.currentNumber = "";
        } else if (n == "C") {
            $scope.currentNumber = $scope.currentNumber.slice(0, -1);

        } else if (n == ".") {
            if ($scope.currentNumber != "" && $scope.currentNumber.indexOf(".") == -1) {
                $scope.currentNumber = $scope.currentNumber + "" + n;
            }
        } else if (n == 0) {
            if ($scope.currentNumber == "" || $scope.currentNumber != 0 || $scope.currentNumber.indexOf(".") != -1) {
                $scope.currentNumber = $scope.currentNumber + "" + n;
            }
        } else if (n != 0 && n != "." && n != "C" && n != "R") {
            if ($scope.currentNumber == "0") {
                $scope.currentNumber = n;
            } else {
                $scope.currentNumber = $scope.currentNumber + "" + n;
            }
        }
    };
    var currentInput;
    $scope.showKeyBoard = function (t) {
        $scope.modalNumberKeyboard.show();
        currentInput = t;
    };
    $scope.finishInput = function () {
        eval('$scope.' + currentInput + '=$scope.currentNumber==""?"0":$scope.currentNumber;');
        $scope.modalNumberKeyboard.hide();
    }

});