(() => {
  'use strict';
  angular
      .module('royal-car')
      .controller('listClientController', listClientController);

  listClientController.$inject = ['userService'];

  function listClientController(userService) {
      let vm = this;

      vm.listaCliente =  userService.getUsers();

     
  }
})();