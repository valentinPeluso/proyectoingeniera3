(function () {
    'use strict';

    angular.module('app')
        .config(routes)
        
        routes.$inject= ['$routeProvider']

    function routes($routeProvider) {
         $routeProvider
            .when('/requerimientos', {
                templateUrl: '/project/requerimientos/requerimientos.html',
                controller: 'requerimientosController',
                controllerAs: 'vm'
            })
            .when('/requerimientos/alta', {
                templateUrl: '/project/requerimientos/alta/alta.html',
                controller: 'altaRequerimientoController',
                controllerAs: 'vm'
            })
            
            .when('/metricas/identificacion', {
                templateUrl: '/project/metricas/identificacion/identificacion.html',
                controller: 'identificacionMetricasController',
                controllerAs: 'vm'
            })
            .when('/metricas/implementacion', {
                templateUrl: '/project/metricas/implementacion/implementacion.html',
                controller: 'implementacionController',
                controllerAs: 'vm'
            })
            .when('/metricas/analisis', {
                templateUrl: '/project/metricas/analisis/analisis.html',
                controller: 'analisisMetricasController',
                controllerAs: 'vm'
            })
            .when('/metricas/validacion', {
                templateUrl: '/project/metricas/validacion/validacion.html',
                controller: 'validacionController',
                controllerAs: 'vm'
            })
            
            .when('/riesgos/identificacion', {
                templateUrl: '/project/riesgos/identificacion/identificacion.html',
                controller: 'identificacionRiesgosController',
                controllerAs: 'vm'
            })
            .when('/riesgos/estrategia_planificacion', {
                templateUrl: '/project/metricas/estrategia_planificacion/estrategia_planificacion.html',
                controller: 'estrategiaPlanificacionController',
                controllerAs: 'vm'
            })
            .when('/riesgos/analisis', {
                templateUrl: '/project/riesgos/analisis/analisis.html',
                controller: 'analisisRiesgosController',
                controllerAs: 'vm'
            })
            .when('/riesgos/seguimiento', {
                templateUrl: '/project/riesgos/seguimiento/seguimiento.html',
                controller: 'seguimientoController',
                controllerAs: 'vm'
            })
            
            .otherwise({
                redirectTo: '/requerimientos'
            });
        
    }
})();