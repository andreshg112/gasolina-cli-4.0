(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .controller('RegistrarController', RegistrarController);

    RegistrarController.$inject = ['DeclaracionesService', 'MesesService', 'DepartamentosService', 'AniosService'];
    function RegistrarController(DeclaracionesService, MesesService, DepartamentosService, AniosService) {
        console.log("Entró a RegistrarController");
        var vm = this;

        //Declaraciones de variables en orden alfabético.
        vm.anios = AniosService.getAnios();
        vm.calcular = calcular;
        vm.cargarMunicipios = cargarMunicipios;
        vm.departamentos = DepartamentosService.getDepartamentos();
        vm.guardar = guardar;
        vm.meses = MesesService.getMeses();

        //Funciones, en orden alfabético
        function activate() {
            vm.declaracion = {};
            vm.declaracion.municipio = "";
            vm.municipios = [];
            //Así son las clases en Javascript ES 5.
            var Gasolina = function(clase) {
                this.clase = clase;
                this.galones_gravado = 0;
                this.precio_referencia = 0;
                this.porcentaje_alcohol = 0;
                this.base_gravable = 0;
                this.sobretasa = 0;
            };
            vm.declaracion.gasolinas_attributes = [
                new Gasolina("Gasolina corriente básica"),
                new Gasolina("Gasolina corriente oxigenada"),
                new Gasolina("Gasolina extra básica"),
                new Gasolina("Gasolina extra oxigenada"),
                new Gasolina("Gasolina importada"),
                new Gasolina("Gasolina NAL. ZON. ESP. FRONT")
            ];
        }

        function calcular(gasolina) {
            gasolina.base_gravable = gasolina.galones_gravado * (1 - (gasolina.porcentaje_alcohol / 100)) * gasolina.precio_referencia;
            gasolina.sobretasa = gasolina.base_gravable * 0.06;
        }

        function cargarMunicipios() {
            vm.declaracion.municipio = "";
            vm.municipios = DepartamentosService.getMunicipios(vm.declaracion.departamento);
        }

        function guardar() {
            vm.declaracion.correccion_fecha = $('#datepicker').val();
            console.log(vm.declaracion);
            /*lstorage o memory
            if (DeclaracionesService.save(vm.declaracion)) {
                activate();
                vm.respuestaRegistro = "Registró correctamente";
            } else {
                vm.respuestaRegistro = "Error registrando.";
            }*/
            DeclaracionesService.save(vm.declaracion)
                .then(function(response) {
                    console.log(response);
                    activate();
                    vm.respuestaRegistro = "Registró correctamente";
                })
                .catch(function(error) {
                    console.log(error);
                    vm.respuestaRegistro = error.statusText;
                })
                .finally(function() { 
                    $("#modalRegistro").modal(); 
                });
        }

        activate();
    }
})();