var app = angular.module("jetkinsDemo", [])
    app.controller('appCtrl',function($scope,$http){
        
        $http.get('http://45.55.220.81:3333/api/test')
        .success(function (data) {
            console.log(data);
        })
        .error(function (data) {
            console.log(data);
        });
    })