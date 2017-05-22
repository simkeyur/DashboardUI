var app = angular.module('dashoardApp', []);
app.controller('dashboardCtrl', function($scope, $http) {
    $scope.CompanyName = "Company Name";
    
    $scope.OrderFullfillment_Created = getRandomVal(1500, 3000);
    $scope.OrderFullfillment_Scheduled = getRandomVal(1500, 3000);
    $scope.OrderFullfillment_BackOrdered = getRandomVal(1500, 3000);
    $scope.OrderFullfillment_Release = getRandomVal(4000, 5000);
    $scope.OrderFullfillment_Shipped = getRandomVal(4500, 6000);
    
    $scope.Holds_AVSHolds = getRandomVal(500, 1000);
    $scope.Holds_TaxLoops = getRandomVal(100, 500);
    $scope.Holds_FraudHolds = getRandomVal(250, 300);
    
    $scope.Exceptions = getRandomVal(0, 50);
    $scope.Exceptions_Duplicates = getRandomVal(0, 100);
    $scope.Exceptions_NegativeQty = getRandomVal(0, 10);
    
    $scope.fulfillmentChart = Morris.Line({
          element: 'fulfillment-trend',
          data: null,
          xkey: 'date',
          ykeys: ['scheduled', 'created', 'backordered'],
          labels: ['Scheduled', 'Created', 'Backordered'],
          pointSize: 3,
          hideHover: 'auto',
          resize: true
        });
    
    $scope.holdsChart = Morris.Line({
          element: 'hold-trend',
          data: null,
          xkey: 'date',
          ykeys: ['avs_hold', 'tax_loop'],
          labels: ['AVS Hold', 'Tax Loop'],
          pointSize: 2,
          hideHover: 'auto',
          resize: true
        });
    
    $scope.exceptionsChart = Morris.Line({
          element: 'exception-trend',
          data: null,
          xkey: 'date',
          ykeys: ['duplicate_order', 'exceptions'],
          labels: ['Duplicate Orders', 'Exceptions'],
          pointSize: 3,
          hideHover: 'auto',
          resize: true
        });
    
    //Can be updated Live via post/get :)
    $http.get('js/plugins/data/fullfillment_data.json').then(fulfillmentData, fulfillmentError);
    $http.get('js/plugins/data/holds_data.json').then(holdsData, holdsError);
    $http.get('js/plugins/data/exceptions_data.json').then(exceptionsData, exceptionsError);
    
    function fulfillmentData(response){
        console.log("fulfilment Data: " + response.data);  
        $scope.fulfillmentChart.setData(response.data);
    }
    function fulfillmentError(error){
        console.log("fulfilment Data Error: " + error);
    }
    
    function holdsData(response){
        console.log("Holds Data: " + response.data);  
        $scope.holdsChart.setData(response.data);
    }
    function holdsError(error){
        console.log("Holds Data Error: " + error);
    }
    
    function exceptionsData(response){
        console.log("Exceptions Data: " + response.data); 
        $scope.exceptionsChart.setData(response.data);
    }
    function exceptionsError(error){
        console.log("Exception Data Error: " + error);
    }
 
    
    function getRandomVal(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});