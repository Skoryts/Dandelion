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
  });