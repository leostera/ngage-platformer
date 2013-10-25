/**
 * @ngdoc service
 * @name platformer.services:map
 * @description
 * ...
 */
angular
.module('platformer')
.factory('Map', function () {
  return {

    /**
     * @ngdoc function
     * @name init
     * @methodOf platformer.services:map
     * @description 
     * ...
     */
    init: function () {
      return;
    },


    /**
     * @ngdoc property
     * @name dataBrowser
     * @propertyOf platformer.services:map
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