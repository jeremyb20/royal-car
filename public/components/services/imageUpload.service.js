(() => {
    'use strict';
    angular
        .module('royal-car')
        .service('imageUploadService', imageUploadService);

    imageUploadService.$inject = ['$http'];

    function imageUploadService($http) {
        const cloudObj = {
            url: 'https://api.cloudinary.com/v1_1/ensamble/image/upload',
            data: {
                upload_preset: 'ky2pba6q',
                tags: 'Any',
                context: 'photo=test'
            }
        };

        const uploadAPI = {
            getConfiguration: _getConfiguration
        };
        return uploadAPI;

        function _getConfiguration() {
            return cloudObj;
        }
    };
})();