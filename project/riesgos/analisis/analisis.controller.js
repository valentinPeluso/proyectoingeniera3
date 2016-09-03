(function () {
    'use strict';

    angular.module('app.riesgos')
    .controller('analisisRiesgosController', analisisController)
    
    analisisController.$inject = ['riesgosService'];
    
    function analisisController(riesgosService){
        var vm = this;
        
       
    }
    
})();