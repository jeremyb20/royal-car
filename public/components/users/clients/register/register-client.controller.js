(() => {
  angular
      .module('royal-car')
      .controller('registerClientController', registerClientController);

  registerClientController.$inject = ['userService'];

  function registerClientController() {
      const vm = this;

      // vm.newUser = {};

      // vm.registerUser = (pnewUser) => {
      //     pnewUser.rol = 2;

      //     let newUser = Object.assign(new Client(), pnewUser);

      //     // let success = userService.setUser(newUser);

      //     if (success == true) {
      //         swal({
      //             title: "Registro exitoso",
      //             text: "El usuario se ha registrado correctamente",
      //             icon: "success",
      //             button: "Aceptar"
      //         });
      //         vm.newUser = null;
      //     } else {
      //         swal({
      //             title: "Registro fallido",
      //             text: "Ha ocurrido un error, inténtelo nuevamente más tarde",
      //             icon: "error",
      //             button: "Aceptar"
      //         });
      //     }
      // }
  }
})();