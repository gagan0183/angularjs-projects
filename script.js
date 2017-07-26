// Code goes here
var app = angular.module('computers', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.
            when('/main', {
              templateUrl: 'main.html',
              controller: 'MainCtrl'
            }).
            when('/about', {
              templateUrl: 'about.html',
              controller: 'MainCtrl'
            }).
            when('/services', {
              templateUrl: 'services.html',
              controller: 'ServicesCtrl'
            }).
            when('/contacts', {
              templateUrl: 'contacts.html',
              controller: 'ContactsCtrl'
            }).
            otherwise({
              redirectTo: '/main'
            })
    }])
    
    .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
      $http.get('services.json').then(function(response) {
        $scope.services = response.data;
      });
    }])
    .controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
      $http.get('services.json').then(function(response) {
        $scope.services = response.data;
      });
    }])
    .controller('ContactsCtrl', ['$scope', '$http', function($scope, $http) {
      $http.get('contacts.json').then(function(response) {
        $scope.contacts = response.data;
      });
    }]);
