'use strict';

/**
 * @ngdoc function
 * @name formulaOneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the formulaOneApp
 */
angular.module('formulaOneApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
