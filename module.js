/* global angular */
var main = '<div><h1>This is the MAIN page.</h1></div>';
var about = '<div><h1>The is the ABOUT page.</h1></div>';
var products = '<div><h1>The is the PRODUCTS page.</h1></div>';

angular.module('simpleApp', ['ngRoute']).config(config);

function config($routeProvider){
	$routeProvider.when('/', {
		template: main
	}).when('/about', {
		template: about
	}).when('/products', {
		template: products
	});
}