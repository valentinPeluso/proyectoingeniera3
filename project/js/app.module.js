(function () {
    'use strict';

    angular.module('app', [
        /* Angular modules */
        'ngRoute',
        // 'ngAnimate',
        
        'ui.select',
        'ui.bootstrap',
        'ngToast',

        /* 3rd-party modules */
       'app.nav',
       'app.requerimientos',
       'app.riesgos',
       'app.metricas',
       
       'app.components'
        
       
    ])
    
})();