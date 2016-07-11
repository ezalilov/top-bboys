'use strict';

angular.
  module('myApp.view1', ['ngRoute']).
  component('view1Component', {
    templateUrl: 'view1/view1.html',
    controller: ['$http',
     function ($http) {
      var self = this;

      $http.get('contant/contant.json').then(function(response) {
        self.texting = response.data;
      });

  }
  ]
});
