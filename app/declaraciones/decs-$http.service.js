(function () {
    'use strict';

    angular
        .module('gasolinaApp')
        .service('DeclaracionesService', DeclaracionesService);

    DeclaracionesService.$inject = ['$http'];
    function DeclaracionesService($http) {
        this.all = all;
        this.save = save;

        ////////////////

        var uri = "http://localhost:51672/api/declaraciones";

        function all() {
            console.log("getAll");
            var req = $http.get(uri);
            return req;
        }

        function save(registro) {
            console.log("post");
            var req = $http.post(uri, registro);
            return req;
        }
    }
})();