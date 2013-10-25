angular.module('platformer')
.config(['SceneProvider', function (SceneProvider) {
  SceneProvider.configure({
    width: "100%",
    height: "100%",
    framerate: 60,
    clearColor: "#121212"
  });
}]);