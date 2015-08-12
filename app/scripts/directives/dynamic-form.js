'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:dynamicForm
 * @description
 * # dynamicForm
 */
angular.module('testApp')
  .directive('dynamicForm', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the dynamicForm directive');
      }
    };
  });
