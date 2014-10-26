/**
 * Created by Stanislav on 19.10.2014.
 */

angular.module("pharmController", [])
  .controller("mainController", function ($scope, $http, Pharms) {
      $scope.formData = {};

      Pharms.get()
          .success(function (data) {
            $scope.pharms = data;
          });



      $scope.createPharm = function () {

        if (!$.isEmptyObject($scope.formData)){
          Pharms.create($scope.formData)
              .success(function (data) {
                $scope.formData = {};
                $scope.pharms = data;
              })
        }
      };

      $scope.deletePharm = function (id) {

        Pharms.delete(id)
            .success(function (data) {
              $scope.pharms = data;
            });
      }
  })

  .controller("locationsController", function($scope, $http, Locations){
      $scope.formData = {};
      $scope.searchData = {
        district: "sch"
      };

      $scope.getStreets = function () {
        Locations.search($scope.searchData)
            .success(function (data) {
              $scope.streets = data;
            })
      };

    Locations.get()
      .success(function (data) {
          $scope.cities = data[0];
      });
//
//    $scope.createCity = function () {
//
//      if (!$.isEmptyObject($scope.formData)){
//        Cities.create($scope.formData)
//          .success(function (data) {
//            $scope.formData = {};
//            $scope.cities = data;
//          })
//      }
//    };
//
//    $scope.deleteCity = function (id) {
//
//      Cities.delete(id)
//        .success(function (data) {
//          $scope.cities = data;
//        });
//    }
  });