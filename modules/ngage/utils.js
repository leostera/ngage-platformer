/**
  * Module dependencies
  */


/**
  * Expose the module
  */

var utils = module.exports = {};

/**
  * Generate a unique identifier.
  *
  * @return String  a uuid.
  */
utils.uuid = function () {
  return Math.random().toString("36").slice(2);
}