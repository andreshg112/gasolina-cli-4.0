(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .controller('ConsultarController', ConsultarController);

    ConsultarController.$inject = ['DeclaracionesService'];
    function ConsultarController(DeclaracionesService) {
        console.log("Entró a ConsultarController");
        var vm = this;
        vm.declaracionSeleccionada = {};
        vm.declaraciones = [];
        vm.isMostrado = false; //Variable para el alert que muestra el registro. Inicia sin ser mostrado.
        vm.mostrarDeclaracion = mostrarDeclaracion;

        function mostrarDeclaracion(declaracion) {
            vm.declaracionSeleccionada = declaracion;
            vm.isMostrado = true;
            console.log("Declaración seleccionada:", declaracion);
        }

        function activate() {
            // lstorage o memory
            // vm.declaraciones = DeclaracionesService.all();
            DeclaracionesService.all()
                .then(function(response) { vm.declaraciones = response.data; })
                .catch(function(error) {
                    console.log(error);
                    alert(error.statusText);
                });
        }

        activate();
    }
})();