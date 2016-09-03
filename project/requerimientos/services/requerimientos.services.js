(function () {
    'use strict';

    angular
        .module('app.requerimientos.services', [])
        .factory('requerimientosService', requerimientosService);

    function requerimientosService($http, $q) {
        var service = {
            getRestricciones: getRestricciones
        };

        return service;

        function getRestricciones() {
            return [
                {
                    id: 0,
                    label: 'Costo'
                },
                {
                    id: 1,
                    label: 'Agenda'
                },
                {
                    id: 2,
                    label: 'Garantías e intereses'
                },
            ]
        }        

       
    }

})();