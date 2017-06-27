/* global angular */

angular.module('simpleApp', ['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when*('/', {
        template: '<h1>Angular template home page<h1>'
    }).when('/about', {
        template: '<h1>Angular template about page</h1>'
    });
}