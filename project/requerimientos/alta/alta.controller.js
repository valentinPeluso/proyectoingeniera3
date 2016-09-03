(function () {
    'use strict';

    angular.module('app.requerimientos')
    .controller('altaRequerimientoController', requerimientosController)
    
    requerimientosController.$inject = ['ngToast','metricasService','requerimientosService'];
    
    function requerimientosController(ngToast,metricasService,requerimientosService){
        var vm = this;
        
        // ngToast.create({
        //   className: 'success',
        //   content: '<a href="#" class="">a message</a>'
        // });
        
        vm.config_header = {
            title: 'Nuevo requerimiento',
        }
        
        vm.metricas = metricasService.get();
        vm.restricciones = requerimientosService.getRestricciones();
        
        vm.requerimiento ={
            metrica: '',
            restricciones: []
        }
    }
    
})();