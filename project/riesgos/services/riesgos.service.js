(function () {
    'use strict';

    angular
        .module('app.riesgos.services', [])
        .factory('riesgosService', riesgosService);

    function riesgosService($http, $q) {
        var service = {
            getCategorias: getCategorias,
            getImpactos: getImpactos,
            getEstrategias: getEstrategias,
            getResposables: getResposables
        };

        return service;
        
        function  getResposables() {
            return [
                {
                    id: 10,
                    label: 'Juan'
                },
                {
                    id: 1,
                    label: 'Mariano'
                },
                {
                    id: 2,
                    label: 'Sofía'
                },
                {
                    id: 3,
                    label: 'Pedro'
                },
                {
                    id: 4,
                    label: 'Micaela'
                },
                {
                    id: 5,
                    label: 'Carlos'
                },
                {
                    id: 6,
                    label: 'Laura'
                },
                {
                    id: 7,
                    label: 'Emma'
                },
                {
                    id: 8,
                    label: 'Matias'
                },
                {
                    id: 9,
                    label: 'Cristian'
                },
            ]
        }

        function getCategorias() {
            return [
                {
                    id: 3,
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
                    id: 3,
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
                    id: 6,
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