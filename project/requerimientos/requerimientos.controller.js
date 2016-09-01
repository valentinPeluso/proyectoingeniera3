(function () {
    'use strict';

    angular.module('app.requerimientos')
    .controller('requerimientosController', requerimientosController)
    
    requerimientosController.$inject = ['ngToast'];
    
    function requerimientosController(ngToast){
        var vm = this;
        
        vm.config_header = {
            title: 'Requerimientos de calidad de software',
            breadcrumbs: [
                {
                    link: false,
                    label: 'Listado',
                    active: true,
                },
                {
                    link: '/requerimientos/alta',
                    label: 'Alta',
                    active: false,
                },
            ]
        }
    }
    
})();