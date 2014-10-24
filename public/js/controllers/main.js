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

  .controller("citiesController", function($scope, $http, Cities){
    $scope.formData = {};

    Cities.get()
      .success(function (data) {
        $scope.cities = data;
      });

    $scope.createCity = function () {

      if (!$.isEmptyObject($scope.formData)){
        Cities.create($scope.formData)
          .success(function (data) {
            $scope.formData = {};
            $scope.cities = data;
          })
      }
    };

    $scope.deleteCity = function (id) {

      Cities.delete(id)
        .success(function (data) {
          $scope.cities = data;
        });
    }
  })

  .controller("districtsController", function($scope, $http, Pharms){

  })

  .controller("streetsController", function($scope, $http, Pharms){

  });