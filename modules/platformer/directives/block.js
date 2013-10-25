/**
 * @ngdoc directive
 * @name platformer.directives:block
 * @description
 * ...
 */
angular.module('platformer')
  .directive('block',['$scope', function ($scope) {
    'use strict';

    return {
      priority: 0,
      restrict: 'A',
      link: function(scope, element, attr, ngModel) {

        /**
         * @ngdoc method
         * @name fromField
         * @methodOf platformer.directives:block
         * @param  {Number, String} number Just the number that has been input.
         * @return {Number}        The number.
         */
        function fromField(number) {
            return Number(number);
        }

        /**
         * @ngdoc method
         * @name toField
         * @methodOf platformer.directives:block
         * @param  {Number, String} number Just the number that has been input.
         * @return {Number}        The number or 0.
         */
        function toField(text) {
            return Number(text || 0);
        }
        ngModel.$parsers.push(fromField);
        ngModel.$formatters.push(toField);
      }
    };
  }
]);