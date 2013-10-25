/**
 * @ngdoc service
 * @name platformer.services:player
 * @description
 * ...
 */
angular
.module('platformer')
.factory('Player', function () {
  return {

    /**
     * @ngdoc function
     * @name init
     * @methodOf platformer.services:player
     * @description 
     * ...
     */
    init: function () {
      return;
    },


    /**
     * @ngdoc property
     * @name dataBrowser
     * @propertyOf platformer.services:player
     * @type {Array}
     * @description 
     * Array of known Browsers.
     */
    dataBrowser: [
      {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
      }
    ]
  };
});