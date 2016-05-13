(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .service('AniosService', AniosService);

    AniosService.$inject = [];
    function AniosService() {
        this.getAnios = getAnios;
        var anios = range(2009, 2017, 1);
        ////////////////

        function getAnios() { return anios.sort(); }
    }
})();