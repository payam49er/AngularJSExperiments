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
        controller: 'SearchCtrl'
      })
      .when('/search', {
        templateUrl: 'views/about.html',
        controller: 'about'
      })
     .when('/contact',{
            templateUrl:'views/contact.html',
            controller:'ContactCtrl'
     })

      .otherwise({
        redirectTo: '/'
      });
  });

