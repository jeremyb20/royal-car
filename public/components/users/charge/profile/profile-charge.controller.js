(() => {
  'use strict';
  angular
      .module('royal-car')
      .controller('listChargeController', listChargeController);

  listChargeController.$inject = ['loginService'];

  function listChargeController(loginService) {
      const vm = this;

      const userAuth = loginService.getAuthUser();

      if (userAuth == undefined) {
          $state.go('logIn');
      } 
      
      vm.userInfo = userAuth;
  }
})();