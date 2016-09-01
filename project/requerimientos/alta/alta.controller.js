(function () {
    'use strict';

    angular.module('app.requerimientos')
    .controller('altaRequerimientoController', requerimientosController)
    
    requerimientosController.$inject = ['ngToast'];
    
    function requerimientosController(ngToast){
        var vm = this;
        
        ngToast.create({
          className: 'success',
          content: '<a href="#" class="">a message</a>'
        });
        
        vm.config_header = {
            title: 'Crear requerimiento',
            breadcrumbs: [
                {
                    link: '/requerimientos',
                    label: 'Listado',
                    active: false,
                },
                {
                    link: false,
                    label: 'Alta',
                    active: true,
                },
            ]
        }
    }
    
})();