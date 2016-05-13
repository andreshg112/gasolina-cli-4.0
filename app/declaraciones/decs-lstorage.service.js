//Almacena usando el servicio $localStorage de ngStorage.
(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .service('DeclaracionesService', DeclaracionesService);

    DeclaracionesService.$inject = ['$localStorage'];
    function DeclaracionesService($localStorage) {
        var ls = $localStorage.$default({ declaraciones: [] });
        this.all = all;
        this.save = save;

        function all() { return ls.declaraciones; }

        function save(declaracion) {
            //Retorna true o false, si guardó o no, respectivamente.
            var cantidadAnterior = ls.declaraciones.length;
            var cantidadNueva = ls.declaraciones.push(declaracion);
            return cantidadAnterior < cantidadNueva;
        }
    }
})();