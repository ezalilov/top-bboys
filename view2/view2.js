'use strict';

angular.
  module('myApp.view2', ['ngRoute']).
  component('view2Component', {
    templateUrl: 'view2/view2.html',
    controller:
     function ($http) {
      var self = this;

      $http.get('contant/bboysinfo.json').then(function(response) {
        self.bboys = response.data;
      });
    }
  
});
