(() => {
  'use strict';
  angular
      .module('royal-car')
      .factory('dataStorageFactory', dataStorageFactory);

  function dataStorageFactory() {
      const dataAPI = {
          // Data functions
          setUserData: _setUserData,
          getUserData: _getUserData,
          updateUserData: _updateUserData,
          // setHotelData: _setHotelData,
          // getHotelData: _getHotelData,
          // updateHotelData: _updateHotelData,
          // Session functions
          setSession: _setSession,
          closeSession: _closeSession,
          getSession: _getSession
      }
      return dataAPI;

      function _setUserData(userData){
          let response;

          let request = $.ajax({
              url: 'http://localhost:4000/api/save_user',
              type: 'post',
              contentType: 'application/x-www-form-urlencoded; charset=utf-8',
              dataType: 'json',
              async: false,
              data: {
                  'firstName': userData.firstName,
                  'secondName': userData.secondName,
                  'firstSurname': userData.firstSurname,
                  'secondSurname': userData.secondSurname,
                  'id': userData.id,
                  'email': userData.email,
                  'password': userData.password,
                  'rol': userData.rol,
                  'birthDate': userData.birthDate,
                  'phone': userData.phone,
                  'photo': userData.photo
              }
          });

          request.done((res) => {
              response = res.success;
              console.log(res.msj);
          });
          request.fail((error) => {
              response = error;
              console.log('Ocurrió un error');
          });

          return response;
      }

      function _getUserData(){
          let userList = [];

          let request = $.ajax({
              url: 'http://localhost:4000/api/get_all_users',
              type: 'get',
              contentType: 'application/x-www-form-urlencoded; charset=utf-8',
              dataType: 'json',
              async: false,
              data: {}
          });

          request.done((userListDB) => {
              userList = userListDB;
          });
          request.fail(() => {
              userList = [];
              console.log('Ocurrió un error');
          });

          return userList;
      }

      function _updateUserData(userData) {
        let response;

        let request = $.ajax({
            url: 'http://localhost:4000/api/update_users',
            type: 'put',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: false,
            data: {
                'firstName': userData.firstName,
                'secondName': userData.secondName,
                'firstSurname': userData.firstSurname,
                'secondSurname': userData.secondSurname,
                'id': userData.id,
                'email': userData.email,
                'password': userData.password,
                'rol': userData.rol,
                'birthDate': userData.birthDate,
                'phone': userData.phone,
                'photo': userData.photo
            }
        });

        request.done((res) => {
            response = res.success;
            console.log(res.msj);
        });
        request.fail((error) => {
            response = error;
            console.log('Ocurrió un error');
        });

        return response;
      }

      // function _setHotelData(hotelData) {
      //     let response;

      //     let request = $.ajax({
      //         url: 'http://localhost:4000/api/save_hotel',
      //         type: 'post',
      //         contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      //         dataType: 'json',
      //         async: false,
      //         data: {
      //             'name' : hotelData.name,
      //             'photo' : hotelData.photo,
      //             'latitude' :hotelData.latitude,
      //             'longitude' : hotelData.longitude,
      //             'province' : JSON.stringify(hotelData.province),
      //             'canton' : JSON.stringify(hotelData.canton),
      //             'distrite' : JSON.stringify(hotelData.distrite),
      //             'address' : hotelData.address,
      //             'servicePhone' : hotelData.servicePhone,
      //             'serviceEmail' : hotelData.serviceEmail,
      //             'reservationEmail' : hotelData.reservationEmail,
      //             'reservationPhone' : hotelData.reservationPhone
      //         }
      //     });

      //     request.done((res) => {
      //         response = res.success;
      //     });
      //     request.fail((error) => {
      //         response = error;
      //         console.log('Ocurrió un error');
      //     });

      //     return response;
      // }

      // function _getHotelData(){
      //     let hotelList = [];

      //     let request = $.ajax({
      //         url: 'http://localhost:4000/api/get_all_hotels',
      //         type: 'get',
      //         contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      //         dataType: 'json',
      //         async: false,
      //         data: {}
      //     });

      //     request.done((hotelListDB) => {
      //         hotelList = hotelListDB;
      //     });
      //     request.fail(() => {
      //         hotelList = [];
      //         console.log('Ocurrió un error');
      //     });

      //     return hotelList;
      // }

      // function _updateHotelData(hotelData) {}

      //-----------------------Login Function-----------------------------------------------

      function _setSession(value) {
          let response = true;
          sessionStorage.setItem('session', JSON.stringify(value));
          return response;
      }

      function _closeSession() {
          let response = true;
          sessionStorage.removeItem('session');
          return response;
      };

      function _getSession() {
          let sessionActive = JSON.parse(sessionStorage.getItem('session'));
          return sessionActive;
      }
  }
})();