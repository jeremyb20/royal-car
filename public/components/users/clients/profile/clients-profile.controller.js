(() => {
  'use strict';
  angular
      .module('royal-car')
      .controller('clientProfileController', clientProfileController);

  clientProfileController.$inject = ['loginService'];

  function clientProfileController(loginService) {
      const vm = this;

      const userAuth = loginService.getAuthUser();

      if (userAuth == undefined) {
          $state.go('logIn');
      } 
      
      vm.userInfo = userAuth;
  }
})();