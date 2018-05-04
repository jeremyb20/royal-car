(() => {
  'use strict'
  angular
  .module('royal-car')
  .service('userService', userService);

  userService.$inject = ['$http', '$log', 'dataStorageFactory']

  function userService($http, $log, dataStorageFactory) {
      const publicUserAPI = {
          setUser : _setUser,
          getUsers : _getUsers,
          updateUsers : _updateUsers
      }
      return publicUserAPI;

      function _setUser(userdata){
          let userList = _getUsers(),
              repeat = false,
              success;

          for (let i = 0; i < userList.length; i++) {
              if(userList[i].getId() === userdata.getId()){
                  repeat = true;
              }
          }

          if(repeat == false){
              success = dataStorageFactory.setUserData(userdata);
          }else{
              success = false;
          }

          return success;
      }
// esta funcion indica que cuando el registro condicional revisa si el rol que esta guardado en la base de dato seria
      function _getUsers(){
          let userData = dataStorageFactory.getUserData(),
              userList = [];

          userData.forEach(obj => {
              if (obj.rol == 1) {
                  let newAdmin = Object.assign(new Admin(), obj);
                  userList.push(newAdmin);
              } else {
                  let newClient = Object.assign(new User(), obj);
                  userList.push(newClient);
              }
          });

          return userList;
      }

      function _updateUsers(pmodifyUser){
        let success = dataStorageFactory.updateUserData(pmodifyUser);
        

        return success;
      }
  }
})();