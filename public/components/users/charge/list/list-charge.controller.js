(() => {
  'use strict';
  angular
      .module('royal-car')
      .controller('chargeProfileController', chargeProfileController);

  chargeProfileController.$inject = ['loginService'];

  function chargeProfileController(loginService) {
      // const vm = this;

      // const userAuth = loginService.getAuthUser();

      // if (userAuth == undefined) {
      //     $state.go('logIn');
      // } 
      
      // vm.userInfo = userAuth;
  }
})();