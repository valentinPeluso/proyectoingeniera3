(function () {
    'use strict';

    angular.module('app.riesgos')
    .controller('identificacionRiesgosController', identificacionController)
    
    identificacionController.$inject = ['riesgosService'];
    
    function identificacionController(riesgosService){
        var vm = this;
        
         vm.config_header = {
            title: 'Identificación de Riesgos',
        }
        
        vm.categoria_riesgos = riesgosService.getCategorias();
        vm.impacto_riesgos = riesgosService.getImpactos();
        vm.estrategias_riesgos = riesgosService.getEstrategias();
        vm.responsables_riesgos = riesgosService.getResposables();
        
        vm.riesgo = {
            descripcion: "",
            probabilidad: "",
              impacto: "",
              estrategia: "",
              responsable: "",
              estado: "No Ocurrido"
        }
        
    }
    
})();