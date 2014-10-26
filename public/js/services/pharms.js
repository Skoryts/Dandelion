/**
 * Created by Stanislav on 19.10.2014.
 */

angular.module("pharmService", [])
  .factory("Pharms", function ($http) {
    return {
      get: function () {
        return $http.get("/api/pharms");
      },
      create: function (pharmData) {
        return $http.post("/api/pharms", pharmData);
      },
      delete: function (id) {
        return $http.delete("/api/pharms/" + id);
      }
    }
  })
  .factory("Locations", function ($http) {
    return {
      search: function (data) {
        return $http.post("/api/locations/streets", data)
      },
      get: function () {
        return $http.get("/api/locations");
      },
      create: function (data) {
        return $http.post("/api/locations", data);
      },
      delete: function (id) {
        return $http.delete("/api/locations/" + id);
      }
    }
  });