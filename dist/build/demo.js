define(["require", "exports", "./ng_app"], function (require, exports, ng_app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // angular.element('[ng-controller=MainCtrl]').scope()
    ng_app_1.ng_app.controller("DemoCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
        function ($scope, $interval, $timeout, $window, $http, $sce) {
            $scope.bbb = 5555555555;
        }]);
});
