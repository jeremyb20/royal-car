(() => {
    'use strict';
    angular
        .module('royal-car')
        .controller('mainController', mainController);

    mainController.$inject = ['$state', 'loginService'];

    function mainController($state, loginService){
        const userAuth = loginService.getAuthUser();

        if (userAuth == undefined) {
            $state.go('logIn');
        }
    }
})();