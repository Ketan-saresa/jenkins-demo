var app = angular.module("jetkinsDemo", [])
    app.controller('appCtrl',['$scope','$http',function($scope,$http){
        
        $http.get('http://45.55.220.81:3333/api/test')
        .then(function (data) {
            $scope.user = data.data;
        },
        function (err) {
            console.log(err);
        });
    }])