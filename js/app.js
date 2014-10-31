$(document).on("click", "div[ng-click]", function() {

  if($(this).attr("ng-click") == "underground = 'true'") locache.set("state", ["underground = 'true'"]);
  else {
    var current = locache.get("state");
    locache.set("state", current.concat([ $(this).attr("ng-click") ]));
  }

});

$(document).on("click", "#reset", function() {
  locache.set("state", []);
  window.location.href = "index.html";
});

angular
.module('app', [])
.controller('Main', function($scope) {

  $scope.init = function() {

    locache.get("state").forEach(function(state) {

      var s = state.replace(/ /g,'').split('=');

      $scope[s[0]] = s[1];

    });

    console.log($scope);

  };

});
