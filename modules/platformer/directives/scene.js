/**
 * @ngdoc directive
 * @name platformer.directives:scene
 * @description
 * ...
 */
angular.module('platformer')
  .directive('scene',['Scene', function (Scene) {
    'use strict';

    return {
      priority: 0,
      restrict: 'E',
      replace: true,
      template: "<canvas></canvas>",
      link: function(scope, element, attr, ngModel) {
        var c = Scene.getConfig();
        element.attr('width',c.width);
        element.attr('height',c.height);
      }
    };
  }
]);