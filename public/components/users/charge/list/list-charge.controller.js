(() => {
  'use strict';
  angular
      .module('royal-car')
      .controller('listChargeController', listChargeController);

  listChargeController.$inject = ['userService'];

  function listChargeController(userService) {
    let vm = this;

    vm.listCharge =  userService.getUsers();
  }
})();