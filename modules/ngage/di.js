/**
  * Expose the module
  */
  
var di = module.exports = {};


/**
 * injects a function with it's parameters by looking them up
 * in the registry object passed in
 *
 * @param  function   the function in which to inject stuff
 * @param  Object     the injectables registry
 * @return            whatever the function returns
 */

di.inject = function (fn, registry) {
  if(typeof fn !== 'function') {
    return fn;
  }

  if(!Object.keys(registry).length) {
    throw 'No dependencies registered for injection!';
  }

  var params = getParams(fn);
  if(!params.length) {
    return fn();
  }

  var deps = params.map(function (param) {
    return inject(registry[param]);
  });

  switch (deps.length) {
    case 1: return fn(deps[0]);
    case 2: return fn(deps[0], deps[1]);
    case 3: return fn(deps[0], deps[1], deps[2]);
    case 4: return fn(deps[0], deps[1], deps[2], deps[3]);
    case 5: return fn(deps[0], deps[1], deps[2], deps[3], deps[4]);
    case 6: return fn(deps[0], deps[1], deps[2], deps[3], deps[4], deps[5]);
    default: return fn.apply(undefined, deps);
  }
}

/**
  * get a functions parameters
  *
  * @param function   the function
  * @return Array     the functions parameters
  */

function getParams (fn) {
  var params = [];
  /* this regexes originally from the angular source */
  var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  var FN_ARG_SPLIT = /,/;
  var FN_ARG = /^\s*(_?)(.+?)\1\s*$/;
  var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
  var fnText = fn.toString().replace(STRIP_COMMENTS, '');
  var argDecl = fnText.match(FN_ARGS);
  argDecl[1].split(FN_ARG_SPLIT).forEach(function (arg){
    params.push(arg.trim())
  });
  return params;
}