import { ng_app } from './ng_app';
// angular.element('[ng-controller=MainCtrl]').scope()

ng_app.controller("WatchGoodsCtrl", ['$scope', '$interval', '$timeout', '$window', '$http', '$sce',
  function($scope, $interval, $timeout, $window, $http, $sce) {


  //   $scope.labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  // $scope.series = ['Series A'];
  //
  // $scope.data = [
  //   [65, 59, 80, 81, 56, 55, 40, 56, 55, 45],
  //   // [28, 48, 40, 19, 86, 27, 90, 86, 27, 90]
  // ];
  $scope.labelsc = ['柴油','钻井水','生活用水','36套管','20套管','7套管','4油管','水泥','土粉','重晶石'];
  // $scope.series = ['Series B'];
  $scope.series = ['剩余数量', '安全库存','岛礁基地库存','计划需求总量','当前剩余库存与计划需求的差值','预警情况'];

  $scope.datac = [
    [100*Math.random(), 80, 81, 56, 55, 40,66,70,79,55],
    [85,80,81,62, 75, 77,69,41,48,57],
    [100*Math.random(), 80, 81, 56, 55, 40,66,70,79,75],
    [85,80,81,62, 75, 77,69,41,48,57],
    [100*Math.random(), 80, 81, 56, 55, 40,66,70,79,39],
    [85,80,81,62, 75, 77,69,41,48,57],
  ];

  $scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];









    $scope.labels = ['柴油', '钻进水', '隔水管', '水泥', '土粉', '7套管', '4油管'];
      $scope.series = ['Series A', 'Series B'];

      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];



      $scope.labelsd = ['4月5日', '4月6日', '4月7日', '4月8日', '4月9日', '4月10日', '4月11日'];
 $scope.series = ['Series A', 'Series B'];
 $scope.datad = [
   [55, 65, 75, 61, 70, 55, 50],
  //  [28, 48, 40, 19, 86, 27, 90]
 ];
 $scope.onClick = function (points, evt) {
   console.log(points, evt);
 };
 $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
 $scope.options = {
   scales: {
     yAxes: [
       {
         id: 'y-axis-1',
         type: 'linear',
         display: true,
         position: 'left'
       },
       {
         id: 'y-axis-2',
         type: 'linear',
         display: true,
         position: 'right'
       }
     ]
   }
 };




 $scope.labelsb = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
   $scope.datab = [300, 500, 100];
















}
