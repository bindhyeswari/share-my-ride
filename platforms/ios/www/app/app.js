/**
 * Created by mishrab on 6/27/15.
 */

function runApp() {
    var app = angular.module('shareMyRideApp', []).bootstrap();
    app.controller('HelloWorldController', function ($scope) {
        $scope.message = 'Hello World';
    });
}
