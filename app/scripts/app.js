'use strict';

/**
 * @ngdoc overview
 * @name formulaOneApp
 * @description
 * # formulaOneApp
 *
 * Main module of the application.
 */

angular.module('formulaOneApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
        ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/formulaOne.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/search',{
            templateUrl:'views/formulaOne.html',
            controller:'SearchCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

