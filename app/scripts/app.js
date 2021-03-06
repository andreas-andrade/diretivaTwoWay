'use strict';

/**
 * @ngdoc overview
 * @name diretivasApp
 * @description
 * # diretivasApp
 *
 * Main module of the application.
 */
angular
  .module('diretivasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    // 'ui.select'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/diretivas', {
        templateUrl: 'views/diretivas.html',
        controller: 'DiretivasCtrl',
        controllerAs: 'diretivas'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
