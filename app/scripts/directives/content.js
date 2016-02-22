'use strict';

/**
 * @ngdoc directive
 * @name diretivasApp.directive:content
 * @description
 * # content
 */
angular.module('diretivasApp')
    .directive('content', function($log, $document) {
        return {
            templateUrl: 'views/directives/content.html',
            restrict: 'E',
            scope: {
                nome: '@',
                in: '=out'
            },
            link: function postLink(scope) {
                // element.bind('keyup', function() {
                //     console.log('digitou');
                // });
                scope.mostrar = function() {
                    // var input = $document.find('aabb');
                    scope.retorno = "retorno da modal";
                    scope.in = scope.retorno;
                };
            }
        };
    });