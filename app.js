'use strict';
// master comment 
// another master comment
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'masterModule',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngAnimate',
  'ngMaterial',
    ]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/view1', {
      template: '<view1-component></view1-component>'
    }).
    when('/view2', {
      template: '<view2-component></view2-component>'
    }).
    otherwise('/view1');
}]);
// sad