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
    Locations.get()
      .success(function (data) {
          $scope.cities = data;
          $scope.formData.city = data[0].name;
          $scope.formData.district = data[0].districts[0];
      });

    $scope.getStreets = function () {
      Locations.getStreets($scope.formData).success(function (data) {
          $scope.streets = data;
      })
    };
    $scope.addStreet = function () {

      if (!$.isEmptyObject($scope.formData.street)){
        Locations.create($scope.formData)
          .success(function (data) {
            $scope.formData.street = "";
            $scope.streets = data;
          })
      }
    };
//
//    $scope.deleteCity = function (id) {
//
//      Cities.delete(id)
//        .success(function (data) {
//          $scope.cities = data;
//        });
//    }
  });