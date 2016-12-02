var app = angular.module("jetkinsDemo", [])
    app.controller('appCtrl',function($scope){
        $scope.data="ABCD";
        console.log($scope.data);
    })