(function() {
    'use strict';

    angular
        .module('app.components')
        .component('headerComponent', {
            templateUrl: '/project/components/header/header.html?v=6',
            controller: headerComponentController,
            bindings: {
                headerTitle: '<',
            }
        });
        
    headerComponentController.$inject = ['buscadorService']    

    function headerComponentController(buscadorService) {
        var vm = this;
        
        vm.filtro = buscadorService.get();
        
        vm.filtrar = filtrar;
        
        function filtrar() {
            buscadorService.post(vm.filtro);
        }

    }

})();