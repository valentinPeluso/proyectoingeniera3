(function() {
    'use strict';

    angular
        .module('app.components')
        .component('headerComponent', {
            templateUrl: '/project/components/header/header.html?v=3',
            controller: headerComponentController,
            bindings: {
                headerTitle: '<',
            }
        });

    function headerComponentController() {
        var vm = this;

    }

})();