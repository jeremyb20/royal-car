(() => {
  'use strict';
  angular
  .module('royal-car')
  .directive('sideMenu', sideMenu)

  sideMenu.$inject = ['$state', 'loginService'];
  
  function sideMenu($state, loginService){

    let sideBarController = function () {
      let vm = this;

     let userAuth = loginService.getAuthUser();
    
      vm.userInfo = userAuth;

      angular.element('#btnClose').on('click', function () {
        swal("Desea cerrar la sesión?", {
                buttons: {
                    cancel: "Cancelar",
                    cerrarSesion: {
                        text: "Cerrar sesión",
                        value: "cerrarSesion",
                    },
                },
            })
            .then((value) => {
                switch (value) {
                    case "cerrarSesion":
                        loginService.logOut();
                        $state.go('logIn');
                        swal({
                            title: "Sesión cerrada correctamente",
                            text: "Se ha finalizado su sesión correctamente",
                            icon: "success",
                            button: "Aceptar",
                        });
                        break;

                    default:
                        break;
                }
            })
    })
    }

    let sidebar = {
      templateUrl: '/components/directives/sidebar/sidebar.view.html',
      restrict: 'EA',
      require: "ngClick",
      controller: sideBarController,
      controllerAs: 'vm',
    };

    return sidebar;
  }
})();