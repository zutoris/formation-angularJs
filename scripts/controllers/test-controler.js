app.controller('TestController', ['$scope', function($scope){
    console.log('TestController');
    $scope.who = ' la famille ';
    $scope.what = ' bien ';

    
    $scope.testSubmit = function(user) {
        console.log(user);
        console.log('ok now I control the datas before sending it to the backend where it will be controlled again');
    }
}]);
