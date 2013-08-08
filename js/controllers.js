'use strict';

/* Controllers */

angular.module('firebox.controllers', []).

controller('HomeController', ['$scope','$location', function($scope,$location) {
    $scope.screenTitle = "Firebox v0.1";
    $scope.editProfile = function(){
        $location.path('/profile');
    };
}]).

controller('ProfileController', ['$scope','$window', 'angularFire', function($scope,$window,angularFire ) {
    $scope.screenTitle = "Edit Profile";
    $scope.back = function(){
        $window.history.back();
    };
    
    var url = 'https://vlinck-sandbox.firebaseio.com/profile';
    var promise = angularFire(url, $scope, 'profile', {});
    
    promise.then(function() {});
    
}])

;