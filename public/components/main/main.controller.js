(() => {
    'use strict';
    angular
        .module('hoteles')
        .controller('mainController', mainController);

    mainController.$inject = ['$state', 'loginService'];

    function mainController($state, loginService){
        const userAuth = loginService.getAuthUser();

        if (userAuth == undefined) {
            $state.go('logIn');
        }
    }
})();