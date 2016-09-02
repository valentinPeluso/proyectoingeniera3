(function () {
    'use strict';

    angular.module('app.riesgos')
    .controller('identificacionRiesgosController', identificacionController)
    
    identificacionController.$inject = ['riesgosService'];
    
    function identificacionController(riesgosService){
        var vm = this;
        
         vm.config_header = {
            title: 'Identificación de Riesgos',
            breadcrumbs: [
                {
                    link: false,
                    label: 'Alta',
                    active: true,
                },
            ]
        }
        
        vm.categoria_riesgos = riesgosService.getCategorias();
        vm.impacto_riesgos = riesgosService.getImpactos();
        vm.estrategias_riesgos = riesgosService.getEstrategias();
        
    }
    
})();