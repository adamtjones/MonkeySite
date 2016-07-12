
      angular
      .module('taco')
      .directive('weather', function (API) {

  return {
    restrict: 'E', // Restrict to Element only
    scope: {},
    replace: true, // Replace as opposed as inserting into
    templateUrl:'../views/weather.html',
    transclude: true, // Will make sure any HTML inside of the directive element gets included

    // link method-boilerplate
    link: function (scope, element, attrs){
      var vm = scope;
      var city = attrs.city;
      var data = API.getWeather(city);
      data.then(function(response) {
        vm.data = response.data;
      });
      
    },

    // Standard Controller-boilerplate
    controller: function ($scope) {

    }
  };
});