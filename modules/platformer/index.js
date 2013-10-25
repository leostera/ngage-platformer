// auto-exports //

var app = angular.module('platformer', ['ngRoute']);

require('./controllers/level1');
require('./directives/block');
require('./directives/scene');
require('./services/scene');
require('./services/map');
require('./services/player');
require('./config');
require('./routes');