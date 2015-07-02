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
                         when('/ingredients', {
                          templateUrl: "ingredients.html",
                        }).
                        otherwise({
                        	templateUrl: "accueil.html"
                        });
                    }]);
