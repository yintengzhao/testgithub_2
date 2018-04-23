define(["require", "exports", "./ng_app"], function (require, exports, ng_app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // angular.element('[ng-controller=MainCtrl]').scope()
    ng_app_1.ng_app.controller("RequireSimCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
        function ($scope, $interval, $timeout, $window, $http, $sce) {
            $scope.labels = ["柴油", "生活用水", "土粉", "重晶石", "水泥", "36套管", "7套管", "4油管"];
            $scope.series = ['预测需求量'];
            $scope.data = [
                [75, 79, 80, 81, 85, 88, 90, 80, 79, 70],
                [70, 75, 78, 83, 80, 80, 92, 85]
            ];
            $scope.data11 = $scope.data12 = $scope.data13 = $scope.data14 = 0;
            $scope.data21 = $scope.data22 = $scope.data23 = $scope.data24 = 0;
            $scope.data31 = $scope.data32 = $scope.data33 = $scope.data34 = 0;
            $scope.dws = [
                "低产量",
                "中产量",
                "高产量"
            ];
            $scope.confirmFunction = function () {
                // $scope.data[0].shift();
                // $scope.data[0].push($scope.aa)
                $scope.lownum = $scope.data11 + $scope.data12 * 2 + $scope.data13 * 3 + $scope.data14 * 4;
                $scope.midnum = $scope.data11 * 2 + $scope.data12 * 4 + $scope.data13 * 6 + $scope.data14 * 8;
                $scope.highnum = $scope.data11 * 3 + $scope.data12 * 6 + $scope.data13 * 9 + $scope.data14 * 12;
                if ($scope.dw == "低产量") {
                    $scope.finalnum = $scope.lownum;
                }
                ;
                if ($scope.dw == "中产量") {
                    $scope.finalnum = $scope.midnum;
                }
                ;
                if ($scope.dw == "高产量") {
                    $scope.finalnum = $scope.highnum;
                }
                ;
                $scope.data[0][0] = $scope.num11 = $scope.finalnum * 47;
                $scope.data[0][1] = $scope.num21 = $scope.finalnum * 98;
                $scope.data[0][2] = $scope.num31 = $scope.finalnum * 37;
                $scope.data[0][3] = $scope.num41 = $scope.finalnum * 14;
                $scope.data[0][4] = $scope.num51 = $scope.finalnum * 42;
                $scope.data[0][5] = $scope.num61 = $scope.finalnum * 66;
                $scope.data[0][6] = $scope.num71 = $scope.finalnum * 86;
                $scope.data[0][7] = $scope.num81 = $scope.finalnum * 50;
                $scope.vol12 = $scope.num11 * 5;
                $scope.vol22 = $scope.num21 * 5;
                $scope.vol32 = $scope.num31 * 25;
                $scope.vol42 = $scope.num41 * 25;
                $scope.vol52 = $scope.num51 * 25;
                $scope.vol62 = $scope.num61 * 10;
                $scope.vol72 = $scope.num71 * 25;
                $scope.vol82 = $scope.num81 * 25;
            };
            $scope.abc = true;
            $scope.yes = function () {
                $scope.abc = false;
            };
            $scope.modifydata = function () {
                $scope.abc = true;
            };
        }]);
});
