'use strict';

// Declare app level module which depends on filters, and services
angular.module('firebox', ['firebox.controllers','pasvaz.bindonce','firebase'])

.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
}])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileController'});
    $routeProvider.otherwise({redirectTo: '/home'});
}]);