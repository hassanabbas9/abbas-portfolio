app = angular.module("portfolio",[]);
app.controller('EmailController', function($scope, $http) {
    $scope.submit = function() {
        console.log($scope.username);
        console.log($scope.useremail);
        console.log($scope.phone);
        console.log($scope.message);
        var req = {
            method: 'POST',
            url: 'https://shielded-island-13371.herokuapp.com/userdata',
            params: { name:  $scope.username, email: $scope.useremail, phone: $scope.phone, message: $scope.message}
        }
        $http(req).success(function(data){
        });
    };
});
