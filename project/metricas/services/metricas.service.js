(function () {
    'use strict';

    angular
        .module('app.metricas.services', [])
        .factory('metricasService', metricasService);

    function metricasService($http, $q) {
        var service = {
            get: getMetricas
        };

        return service;

        function getMetricas(id) {
            return [
                {
                    id: 0,
                    label: '% Recursos utilizados'
                },
                {
                    id: 1,
                    label: 'Grado de solución ante fallos totales'
                },
                {
                    id: 2,
                    label: 'Madurez de las pruebas'
                },
                {
                    id: 3,
                    label: 'Porcentaje de errores esperados'
                },
                {
                    id: 4,
                    label: 'Porcentaje de pruebas que se necesitan realizar'
                },
                {
                    id: 5,
                    label: 'Cumplimiento del estándar de interfaz'
                },
                {
                    id: 6,
                    label: 'Complejidad en el mantenimiento'
                },
                {
                    id: 7,
                    label: 'Complejidad en el desarrollo'
                },
                {
                    id: 8,
                    label: 'Complejidad en la implementacion'
                },
                {
                    id: 9,
                    label: 'Complejidad en el uso'
                },
                
                
            ]
        }        

       
    }

})();