/**
  * Module dependencies
  */

var di = require('./di');
var utils = require('./utils');

/**
  * Expose the module
  */

var mod = module.exports = {};


/**
  * Modules registry.
  */

mod.registry = {};

/**
  * Create a new module in the registry
  *
  * @param  String  the name of the module
  * @param  Array   an array of module names
  */

mod.createModule = function (moduleName, dependencies) {
  if(typeof moduleName !== 'string') {
    throw 'createModule expects moduleName to be a String';
  }

  if(!Array.isArray(dependencies)) {
    throw 'createModule expects dependencies to be an Array';
  }

  dependencies.forEach(function (dependency) {
    if(typeof dependency !== 'string') {
      throw 'createModule expects each dependency to be a String';
    }
  });

  if(typeof mod.registry[moduleName] === undefined) {
    mod.registry[moduleName] = $create(moduleName, dependencies);
  } else {
    throw moduleName+' already exists';
  }
};

/**
  * Retrieves a module from the registry by it's name
  *
  * @param  String   the module name
  * @return Object   the module
  */

mod.module = function (moduleName) {
  var module = mod.registry[moduleName];
  if(module) {
    return module;
  } else {
    throw moduleName+' has not been registered';
  }
}

function $create (moduleName, dependencies) {

}