(() => {
    'use strict';
    angular
        .module('royal-car')
        .directive('navegacionPrincipal', navegacionPrincipal);

    function navegacionPrincipal() {

        const navegacion = {
            templateUrl: '/components/directives/header/header.view.html',
            restrict: 'E'
        };

        return navegacion;
    }
})();