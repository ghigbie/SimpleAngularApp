/* global angular */

const app = angular.module('simpleApp', ['ngRoute']);

app.config( ($routeProvider) =>{
    $routeProvider
    .when('/', 
        {
            template: '<h1>Angular template home page<h1>'
        })
    .when('/about', 
        {
            template: '<h1>Angular template about page</h1>'
        })
    .otherwise({redirectTo: '/'});
});