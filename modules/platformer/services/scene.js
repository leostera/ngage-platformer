/**
 * @ngdoc service
 * @name platformer.services:scene
 * @description
 * ...
 */
angular
.module('platformer')
.provider('Scene', function () {

  var opts = {
    width: "100%",
    height: "100%"
  };

  var configure = function (options) {
    opts = options || opts;
  }

  return {
    $get: ['$rootScope', function ($rootScope) {
      return {
        getConfig: function () {
          return opts;
        },
        configure: configure
      };
    }],

    configure: configure
  }
});