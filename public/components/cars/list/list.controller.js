(() => {
  'use strict';
  angular
      .module('royal-car')
      .controller('listCarController', listCarController);

  listCarController.$inject = ['carService'];

  function listCarController(carService) {
    let vm = this;

    vm.listCar =  carService.getCar();
  }
})();