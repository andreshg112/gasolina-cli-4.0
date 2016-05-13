(function() {
    'use strict';

    angular
        .module('gasolinaApp')
        .service('DepartamentosService', DepartamentosService);

    DepartamentosService.$inject = [];
    function DepartamentosService() {
        var departamentos = [
            {
                nombre: "Atlántico",
                municipios: ["Barranquilla", "Sabanalarga"].sort()
            },
            {
                nombre: "Magdalena",
                municipios: ["Santa Marta", "Santa Ana"].sort()
            },
            {
                nombre: "Cesar",
                municipios: ["Valledupar", "Aguachica"].sort()
            },
            {
                nombre: "Bolívar",
                municipios: ["Cartagena", "Talaigua"].sort()
            },
            {
                nombre: "Sucre",
                municipios: ["Sincelejo", "Sincé"].sort()
            },
            {
                nombre: "Córdoba",
                municipios: ["Montería", "Cereté"].sort()
            },
            {
                nombre: "San Andrés, Providencia y Santa Catalina",
                municipios: ["San Andrés", "Providencia"].sort()
            },
            {
                nombre: "Santander",
                municipios: ["Bucaramanga", "Barrancabermeja"].sort()
            },
            {
                nombre: "La Guajira",
                municipios: ["Riohacha", "Maicao"].sort()
            }
        ];
        this.getDepartamentos = getDepartamentos;
        this.getMunicipios = getMunicipios;
        ////////////////
        function compareDepartamentos(dep1, dep2) {
            /* Compara dos objetos departamentos y retorna:
            -1, si el nombre de dep1 va antes del segundo.
            0, si son iguales.
            1, si el nombre de dep1 va después de dep2.
            Similar a la interface 'Comparable' en Java. */
            return dep1.nombre.localeCompare(dep2.nombre);
        }
        function getDepartamentos() { return departamentos.sort(compareDepartamentos); }
        function getMunicipios(nombreDepart) {
            var depart = $.grep(departamentos, function(e) { return e.nombre == nombreDepart; });
            return depart.length === 0 ? [] : depart[0].municipios;
        }
    }
})();