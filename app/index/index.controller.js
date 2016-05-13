(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$location'];
    function IndexController($location) {
        console.log("Entró a IndexController");
        var vm = this;

        //Variables para manipular la clase 'active' de los enlaces del navbar. Es decir, cuál vista está seleccionada.
        vm.verRegistrar = false;
        vm.verConsultar = false;
        vm.verAcerca = true;

        vm.activeRegistrar = function() {
            //Si se hizo clic en Registrar, desactivar los demás.
            //Esto hará que el link Registrar tome la clase 'active' y su color sea más claro. 
            vm.verRegistrar = true;
            vm.verAcerca = false;
            vm.verConsultar = false;
        };
        vm.activeConsultar = function() {
            vm.verConsultar = true;
            vm.verRegistrar = false;
            vm.verAcerca = false;
        };
        vm.activeAcerca = function() {
            vm.verAcerca = true;
            vm.verRegistrar = false;
            vm.verConsultar = false;
        };
        //Verificar en cuál ruta está, en caso de recargar la página.
        if ($location.path() == '/registrar/') {
            vm.activeRegistrar();
        } else if ($location.path() == '/consultar/') {
            vm.activeConsultar();
        } else if ($location.path() == '/acerca/') {
            vm.activeAcerca();
        }
        //Fin

        vm.mostrar = function(dato) {
            console.log(dato);
        };

    }
})();