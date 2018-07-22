(() => {
  angular
      .module('royal-car')
      .controller('registerCarController', registerCarController);

  registerCarController.$inject = ['Upload', 'imageUploadService', 'carService'];

  function registerCarController(Upload, imageUploadService, carService) {
      const vm = this;

      vm.newCar = {};

      vm.cloudObj = imageUploadService.getConfiguration();

      vm.preRegisterCar = (pnewCar) => {
          vm.cloudObj.data.file = pnewCar.photo[0];
          Upload.upload(vm.cloudObj).success((data) => {
              vm.registerCar(pnewCar, data.url);
          });
      }

      vm.registerCar = (pnewCar,urlImage) => {
          pnewCar.photo = urlImage;
          pnewCar.rol = 3;

          let newCar = Object.assign(new Car(), pnewCar);

          let success = carService.setCar(newCar);

          if (success == true) {
              swal({
                  title: "Registro exitoso",
                  text: "El vehiculo se ha registrado correctamente",
                  icon: "success",
                  button: "Aceptar"
              });
              vm.newCar = null;
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