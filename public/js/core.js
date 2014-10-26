/**
 * Created by Stanislav on 19.10.2014.
 */

angular.module("Dandelion", ["ngRoute", "pharmController", "pharmService"])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when("/", {
        templateUrl: "../views/home.html",
        controller: "mainController"
      })

      .when("/locations", {
        templateUrl: "../views/locations.html",
        controller: "locationsController"
      });

      $locationProvider.html5Mode(true);
  });