var app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'AppController',
            templateUrl: 'templates/home.html'
        })
        .when('/about', {
            controller: 'AboutController',
            templateUrl: 'templates/about.html'
        })
        .when('/recruitement', {
            controller: 'RecruitementController',
            templateUrl: 'templates/recruitement.html'
        })
        .when('/quotation', {
            controller: 'QuotationController',
            templateUrl: 'templates/quotation.html'
        })
        .when('/contact', {
            controller: 'ContactController',
            templateUrl: 'templates/contact.html'
        })
        .when('/test', {
            controller: 'TestController',
            templateUrl: 'templates/test.html'
        })
        .when('/404', {
            controller: 'NotFoundController',
            templateUrl: 'templates/404.html'
        })
        .otherwise({redirectTo: '/404'})
        ;
});







app.controller('ChildController', ['$scope', function($scope){
    console.log('ChildController');
    $scope.what = ' bien ou bien ';
}]);

app.controller('GrandChildController', ['$scope', function($scope){
    console.log('GrandChildController');
    $scope.who = ' cousine ';
    $scope.what = ' bien ou quoi ';
}]);


app.directive('maDirective', function() {
  return {
    restrict: 'A',
    template: '<p>My new directive</p>'
  }
});
