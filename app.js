var bumblebeeApp = angular.module("bumblebeeApp", [
  'ngRoute',
  'ngAnimate'
]);

bumblebeeApp.config(['$routeProvider',
                    function($routeProvider) {
                      $routeProvider.
                        when('/a-propos', {
                          templateUrl: "apropos.html",
                        }).
                        otherwise({
                        	templateUrl: "accueil.html"
                        });
                    }]);
