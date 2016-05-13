//Almacena en memoria temporal. Se borran los datos al recargar la página.
(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .service('DeclaracionesService', DeclaracionesService);

    DeclaracionesService.$inject = [];
    function DeclaracionesService() {
        var declaraciones = [];
        this.all = all;
        this.save = save;

        function all() { return declaraciones; }
        
        function save(declaracion) {
            //Retorna true o false, si guardó o no, respectivamente.
            var cantidadAnterior = declaraciones.length;
            var cantidadNueva = declaraciones.push(declaracion);
            return cantidadAnterior < cantidadNueva;
        }
    }
})();