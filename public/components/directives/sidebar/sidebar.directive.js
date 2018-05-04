(() => {
  'use strict';
  angular
  .module('royal-car')
  .directive('sideMenu', sideMenu)

  sideMenu.$inject = ['loginService'];
  
  function sideMenu(loginService){

    let headlineController = function () {
      let vm = this;

     let userAuth = loginService.getAuthUser();
    
      vm.userInfo = userAuth;
    }

    let sidebar = {
      templateUrl: '/components/directives/sidebar/sidebar.view.html',
      restrict: 'EA',
      require: "ngClick",
      controller: headlineController,
      controllerAs: 'vm',
    };

    return sidebar;
  }
})();