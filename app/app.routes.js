(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'app/acerca/acerca.html'
                    })
                    .when('/registrar/', {
                        templateUrl: 'app/declaraciones/registrar.html',
                        controller: 'RegistrarController',
                        controllerAs: 'regVm'
                    })
                    .when('/consultar/', {
                        templateUrl: 'app/declaraciones/consultar.html',
                        controller: 'ConsultarController',
                        controllerAs: 'consultarVm'
                    })
                    .when('/acerca/', {
                        templateUrl: 'app/acerca/acerca.html'
                    });
            }]);
})();