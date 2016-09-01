(function() {
    'use strict';

    angular
        .module('app.components')
        .component('headerComponent', {
            templateUrl: '/project/components/header/header.html',
            controller: headerComponentController,
            bindings: {
                headerTitle: '<',
                headerBreadcrumbs: '<',
                //onUpdate: '&',
                //cargando: '='
            }
        });

    function headerComponentController() {
        var vm = this;

    }

})();