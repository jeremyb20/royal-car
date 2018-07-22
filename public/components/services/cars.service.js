(() => {
  'use strict'
  angular
  .module('royal-car')
  .service('carService', carService);

  carService.$inject = ['$http', '$log', 'dataStorageFactory']

  function carService($http, $log, dataStorageFactory) {
      const publicUserAPI = {
          setCar : _setCar,
          getCar : _getCar,
          updateCars : _updateCars
        
      }
      return publicUserAPI;

      function _setCar(cardata){
          let carList = _getCar(),
              repeat = false,
              success;

          for (let i = 0; i < carList.length; i++) {
              if(carList[i].getMatricula() === cardata.getMatricula()){
                  repeat = true;
              }
          }

          if(repeat == false){
              success = dataStorageFactory.setCarData(cardata);
          }else{
              success = false;
          }

          return success;
      }
// esta funcion indica que cuando el registro condicional revisa si el rol que esta guardado en la base de dato seria
      function _getCar(){
          let carData = dataStorageFactory.getCarData(),
              carList = [];

          carData.forEach(obj => {
              if (obj.rol == 1) {
                  let newAdmin = Object.assign(new Admin(), obj);
                  carList.push(newAdmin);
              } else {
                  let newClient = Object.assign(new User(), obj);
                  carList.push(newClient);
              }
          });

          return carList;
      }

      function _updateCars(pmodifyCar){
        let success = dataStorageFactory.updateCarData(pmodifyCar);
        

        return success;
      }


   
  }
})();