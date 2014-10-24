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

      .when("/cities", {
        templateUrl: "../views/cities.html",
        controller: "citiesController"
      })

      .when("/districts", {
        templateUrl: "../views/districts.html",
        controller: "districtsController"
      })

      .when("/streets", {
        templateUrl: "../views/streets.html",
        controller: "streetsController"
      });

      $locationProvider.html5Mode(true);
  });