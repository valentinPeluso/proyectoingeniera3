(function () {
    'use strict';

    angular
        .module('app.riesgos.services', [])
        .factory('riesgosService', riesgosService);

    function riesgosService($http, $q) {
        var service = {
            getCategorias: getCategorias,
            getImpactos: getImpactos,
            getEstrategias: getEstrategias
        };

        return service;

        function getCategorias() {
            return [
                {
                    id: 0,
                    label: 'Del proyecto'
                },
                {
                    id: 1,
                    label: 'Del producto'
                },
                {
                    id: 2,
                    label: 'Del negocio'
                },
            ]
        }
        function getEstrategias() {
            return [
                {
                    id: 0,
                    label: 'Estrategía de anulación'
                },
                {
                    id: 1,
                    label: 'Estrategía de disminución'
                },
                {
                    id: 2,
                    label: 'Estrategía de contingencia'
                },
            ]
        } 
        function getImpactos() {
            return [
                {
                    id: 0,
                    label: 'Muy bajo'
                },
                {
                    id: 1,
                    label: 'Bajo'
                },
                {
                    id: 2,
                    label: 'Moderado'
                },
                {
                    id: 3,
                    label: 'Alto'
                },
                {
                    id: 4,
                    label: 'Muy alto'
                },
                {
                    id: 5,
                    label: 'Catastrófico'
                },
            ]
        }   
       
    }

})();