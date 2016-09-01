(function () {
    'use strict';

    angular.module('app.nav')
    .controller('navController', navController)
    
    navController.$inject = ['$location'];
    
    function navController($location){
        var vm = this;
        
        vm.changeOfLocation = changeOfLocation;
        
        activate();
         
        function  activate(argument) {
            vm.active = $location.$$path;
            checkSections()
         }
         
         function changeOfLocation(location) {
             vm.active = location;
             checkSections()
         }
        function checkSections(argument) {
            switch (vm.active.split("/")[1]) {
                case 'riesgos':
                    vm.mostrar_metricas = false;
                    vm.mostrar_riesgos = true;
                    break;
                case 'metricas':
                    vm.mostrar_metricas = true;
                    vm.mostrar_riesgos = false;
                    break;
                
                default:
                    vm.mostrar_metricas = false;
                    vm.mostrar_riesgos = false;
            }
        }
        
    }
    
})();