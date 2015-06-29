/**
 * Created by mishrab on 6/27/15.
 */

function runApp() {
    var app = angular.module('shareMyRideApp', []);
    app.controller('HelloWorldController', function ($scope) {
        $scope.message = 'Changed info now ... some more ';
    });

    angular.bootstrap(document.body, ['shareMyRideApp']);
}
