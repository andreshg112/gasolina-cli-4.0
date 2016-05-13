(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .service('MesesService', MesesService);

    MesesService.$inject = [];
    function MesesService() {
        this.getMeses = getMeses;
        var meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        ////////////////

        function getMeses() { return meses; }
    }
})();