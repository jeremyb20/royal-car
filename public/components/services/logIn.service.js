(() => {
  'use strict';
  angular
      .module('royal-car')
      .service('loginService', loginService);

  loginService.$inject = ['userService', 'dataStorageFactory'];

  function loginService(userService, dataStorageFactory) {
      const loginAPI = {
          logIn: _logIn,
          logOut: _logOut,
          getAuthUser: _getAuthUser
      };
      return loginAPI;

      function _logIn(pcredentials) {
          let userList = userService.getUsers(),
              success = false;

          for (let i = 0; i < userList.length; i++) {
              if (userList[i].getEmail() === pcredentials.email && userList[i].getPassword() === pcredentials.password) {
                  let credentialsCorrect = {
                      id: userList[i].getId(),
                      rol: userList[i].getRol()
                  }
                  success = dataStorageFactory.setSession(credentialsCorrect);
              }
          }
          return success;
      }

      function _logOut() {
          let success = dataStorageFactory.closeSession();
          return success;
      }

      function _getAuthUser() {
          let activeSession = dataStorageFactory.getSession(),
              userData;

          if (!activeSession) {
              userData = undefined;
          } else {
              userData = getUserDataActive(activeSession.id);
          }

          return userData;
      }


      function getUserDataActive(id) {
          let userList = userService.getUsers(),
              userData;

          for (let i = 0; i < userList.length; i++) {
              if (userList[i].getId() == id) {
                  userData = userList[i];
              }
          };

          return userData;
      }
  }
})();