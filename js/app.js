angular.module('waitStaffCalc', [] )
  .controller('calcController', function($scope) {

    function init() {
        $scope.base = 0;
        $scope.taxRate = 0;
        $scope.subtotal = 0;
        $scope.tipPer = 0;
        $scope.tip = 0;
        $scope.total = 0;
        $scope.count = 0
        $scope.tipTotal = 0;
        $scope.averageTip = 0;
        $scope.count = 0;
        $scope.tipTotal = 0;
        $scope.averageTip = 0;
    }

    init();

    $scope.count = 0;
    $scope.tipTotal = 0;
    $scope.averageTip; 
    
    $scope.submit = function() {
        $scope.base;
        $scope.taxRate = $scope.taxRate * .01;
        $scope.subtotal = ($scope.base * $scope.taxRate) + $scope.base;
        $scope.tipPer;
        $scope.tip = ($scope.tipPer / 100) * $scope.subtotal;
        $scope.total = $scope.tip + $scope.subtotal;
        $scope.count++;
        $scope.tipTotal += $scope.tip;
        $scope.averageTip = $scope.tipTotal / $scope.count;


    }
        
    
       $scope.reset = function() {
        init();
       } 

       $scope.cancel = function() {
        $scope.base = 0;
        $scope.taxRate = 0;
        $scope.tipPer = 0;
        
        }
    

  });
  





 
    
