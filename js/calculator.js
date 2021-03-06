angular.module("Calculator", []).controller("CalculatorController",
    function CalculatorController($scope) {
        $scope.displayValue = '';
        $scope.memory = null;
        $scope.result = 0;
        $scope.operation = null;
        $scope.savedMemory = null;

        $scope.addNumber = function(newNumber) {
            if ($scope.displayValue.length < 18) {
                $scope.displayValue += String(newNumber);
            }
        }

        $scope.saveInMemory = function() {
            if ($scope.memory == null) {
                if ($scope.displayValue == '') {
                    $scope.displayValue = 0;
                }
                $scope.memory = parseFloat($scope.displayValue);
            }
        };
        $scope.onClickReset = function() {
            $scope.operation = null;
            $scope.memory = null;
            $scope.displayValue = '';
            $scope.result = 0;
        };
        $scope.onClickClear = function() {
            $scope.displayValue = '';
        };
        $scope.onClickSum = function() {
            $scope.saveInMemory();
            $scope.operation = "+";
            $scope.displayValue = '';
        };
        $scope.onClickSubtract = function() {
            $scope.saveInMemory();
            $scope.operation = "-";
            $scope.displayValue = '';
        };
        $scope.onClickMultiply = function() {
            $scope.saveInMemory();
            $scope.operation = "*";
            $scope.displayValue = '';
        };
        $scope.onClickDivide = function() {
            $scope.saveInMemory();
            $scope.operation = "/";
            $scope.displayValue = '';
        };
        $scope.onClickChangeSign = function() {
            $scope.displayValue *= -1;
            
            $scope.result = $scope.displayValue;
            $scope.memory = $scope.result;
            $scope.displayValue = $scope.result;
        };
        $scope.onClickPercentage = function() {
            $scope.result = $scope.displayValue/100;
            $scope.operation = null;
            if ($scope.result != 0) {
                $scope.memory = $scope.result;
            }
            if ($scope.result != 0) {
                $scope.displayValue = $scope.result;
            }
        };
        $scope.onClickSaveMemory = function() {
            if ($scope.savedMemory != '') {
                $scope.savedMemory = $scope.displayValue;
            }
        }
        $scope.onClickReadMemory = function() {
            if ($scope.savedMemory != null) {
                $scope.displayValue = $scope.savedMemory;
            }
        }
        $scope.onClickCalculate = function() {
            if ($scope.operation == "+"){
                $scope.result = parseFloat($scope.memory) + parseFloat($scope.displayValue);
            }
            else if ($scope.operation == "-"){
                $scope.result = parseFloat($scope.memory) - parseFloat($scope.displayValue);
            }
            else if ($scope.operation == "*"){
                $scope.result = parseFloat($scope.memory) * parseFloat($scope.displayValue);
            }
            else if ($scope.operation == "/"){
                $scope.result = parseFloat($scope.memory) / parseFloat($scope.displayValue);
            }

            $scope.operation = null;
            if ($scope.result != 0) {
                $scope.memory = $scope.result;
            }
            if ($scope.result != 0) {
                $scope.displayValue = $scope.result;
            }
        };
    }
);
