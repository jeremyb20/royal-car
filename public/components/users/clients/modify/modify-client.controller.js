(() => {
  angular
      .module('royal-car')
      .controller('modifyClientController', modifyClientController);

  modifyClientController.$inject = ['Upload', 'userService', 'imageUploadService', 'loginService'];

  function modifyClientController(Upload, userService, imageUploadService, loginService) {
      const vm = this;

      const userAuth = loginService.getAuthUser();

      vm.userLogged = userAuth;
    //   console.log(userAuth);
      vm.modifyUser = Object.assign(userAuth, vm.modifyUser);
      vm.modifyUser.birthDate = new Date(userAuth.birthDate);

      
      vm.cloudObj = imageUploadService.getConfiguration();

      vm.preModificationUser = (pmodifyUser) => {
          vm.cloudObj.data.file = pmodifyUser.photo[0];
          Upload.upload(vm.cloudObj).success((data) => {
              vm.modificationUser(pmodifyUser, data.url);
          });
      }


      vm.modificationUser = (pmodifyUser,urlImage) => {   

        pmodifyUser.photo = urlImage;
        
          if(userAuth.getRol() == 1){
              let modifyUser = Object.assign(new Admin(), pmodifyUser);
          }else{
              let modifyUser = Object.assign(new User(), pmodifyUser);
          }
          console.log(userAuth);
          let success = userService.updateUsers(pmodifyUser);

          if (success == true) {
              swal({
                  title: "Actualización exitosa",
                  text: "El usuario se ha actualizado correctamente",
                  icon: "success",
                  button: "Aceptar"
              });
              vm.modifyUser = null;
          } else {
              swal({
                  title: "Actualización fallida",
                  text: "Ha ocurrido un error, inténtelo nuevamente más tarde",
                  icon: "error",
                  button: "Aceptar"
              });
          }
      }
  }
})();