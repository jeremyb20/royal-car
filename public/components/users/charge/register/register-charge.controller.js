(() => {
  angular
      .module('royal-car')
      .controller('registerChargeController', registerChargeController);

  registerChargeController.$inject = ['Upload', 'imageUploadService', 'userService'];

  function registerChargeController(Upload, imageUploadService, userService) {
      const vm = this;

      vm.newUser = {};

      vm.cloudObj = imageUploadService.getConfiguration();

      vm.preRegisterCharge = (pnewUser) => {
          vm.cloudObj.data.file = pnewUser.photo[0];
          Upload.upload(vm.cloudObj).success((data) => {
              vm.registerCharge(pnewUser, data.url);
          });
      }

      vm.registerCharge = (pnewUser,urlImage) => {
          pnewUser.photo = urlImage;
          pnewUser.rol = 2;

          let newUser = Object.assign(new User(), pnewUser);

          let success = userService.setUser(newUser);

          if (success == true) {
              swal({
                  title: "Registro exitoso",
                  text: "El usuario se ha registrado correctamente",
                  icon: "success",
                  button: "Aceptar"
              });
              vm.newUser = null;
          } else {
              swal({
                  title: "Registro fallido",
                  text: "Ha ocurrido un error, inténtelo nuevamente más tarde",
                  icon: "error",
                  button: "Aceptar"
              });
          }
      }
  }
})();