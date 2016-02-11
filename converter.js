var myModule = angular.module("ctofApp",[]);

myModule.controller("ConverterController",

    function ($scope) {
        var cc = this;
        
        cc.inputTempValue = 0;
        cc.answer = 0;
        cc.hidectof = false;
        cc.hideftoc = false;
        
        cc.ctofConverter = function ctofConverter() {
            cc.answer = (cc.inputTempValue * (9/5)) + 32;
            cc.inputTempValue = cc.answer;
            cc.hidectof = true;
            cc.hideftoc = false;
        }
        
        cc.ftocConverter = function ftocConverter() {
            cc.answer = (cc.inputTempValue - 32) * (5/9);
            cc.inputTempValue = cc.answer;
            cc.hidectof = false;
            cc.hideftoc = true;
        }
        
        $scope.$watch('cc.inputTempValue');
        $scope.$watch('cc.answer');
        
    }
);
        