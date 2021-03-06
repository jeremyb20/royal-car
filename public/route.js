(() => {
    'use strict'
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
        .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

        $stateProvider

        .state('landing', {
            // Se le crea un url (por el cual se va a accesar a el medio de la ruta en el navegador)
            url: '/',
            // Se convoca al html
            templateUrl: './components/landing-page/landing-page.view.html',
            // se convoca el controlador
            data: {
                pageTitle: 'Bienvenido | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/landing-page/landing-page.controller.js')
                }]
            },
            controller: 'landingPageController',
            controllerAs: 'vm'
        })

        .state('main', {
            url: '/main',
            templateUrl: './components/main/main.view.html',
            data: {
                pageTitle: 'Página principal | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/main/main.controller.js')
                }]
            },
            controller: 'mainController',
            controllerAs: 'vm'
        })

        .state('main.principal',{
            url: '/principal',
            templateUrl: './components/main/principal/principal.view.html',
            data: {
                pageTitle: 'Página principal | Royal Cars'
            }
        })

        .state('logIn', {
            url: '/login',
            templateUrl: './components/login/login.view.html',
            data: {
                pageTitle: 'Inicio de Sesión | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/login/login.controller.js')
                }]
            },
            controller: 'loginController',
            controllerAs: 'vm'
        })

        //*INICIO Registro Clientes */

        .state('registerClient', {
            url: '/registerClient',
            templateUrl: './components/users/clients/register/register-client.view.html',
            data: {
                pageTitle: 'Registro de usuarios | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/users/clients/register/register-client.controller.js')
                }]
            },
            controller: 'registerClientController',
            controllerAs: 'vm'
        })

        .state('main.profileClient', {
            url: '/profileClient',
            templateUrl: './components/users/clients/profile/clients-profile.view.html',
            data: {
                pageTitle: 'Perfil Usuario | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/users/clients/profile/clients-profile.controller.js')
                }]
            },
            controller: 'clientProfileController',
            controllerAs: 'vm'
        })

        .state('main.modifyClient', {
            url: '/modifyClient',
            templateUrl: './components/users/clients/modify/modify-client.view.html',
            data: {
                pageTitle: 'Actualizar Cliente | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/users/clients/modify/modify-client.controller.js')
                }]
            },
            controller: 'modifyClientController',
            controllerAs: 'vm'
        })

        .state('main.listClient', {
            url: '/listClient',
            templateUrl: './components/users/clients/list/list-client.view.html',
            data: {
                pageTitle: 'Lista Cliente | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/users/clients/list/list-client.controller.js')
                }]
            },
            controller: 'listClientController',
            controllerAs: 'vm'
        })

        //**FIN Registro cliente */

        //**INICIORegistro de encargado */

        .state('main.registerCharge', {
            url: '/registerCharge',
            templateUrl: './components/users/charge/register/register-charge.view.html',
            data: {
                pageTitle: 'Registro de encargados | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/users/charge/register/register-charge.controller.js')
                }]
            },
            controller: 'registerChargeController',
            controllerAs: 'vm'
        })

        .state('main.profileCharge', {
            url: '/profileCharge',
            templateUrl: './components/users/charge/profile/profile-charge.view.html',
            data: {
                pageTitle: 'Perfil Encargado | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/users/charge/profile/profile-charge.controller.js')
                }]
            },
            controller: 'chargeProfileController',
            controllerAs: 'vm'
        })

        .state('main.listCharge', {
            url: '/listCharge',
            templateUrl: './components/users/charge/list/list-charge.view.html',
            data: {
                pageTitle: 'Lista Encargados | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/users/charge/list/list-charge.controller.js')
                }]
            },
            controller: 'listChargeController',
            controllerAs: 'vm'
        })

        //**Fin Registro encargados */


        //**Inicio Registro de vehiculos */
        .state('main.registerCar', {
            url: '/registerCar',
            templateUrl: './components/cars/register/register-car.view.html',
            data: {
                pageTitle: 'Registrar Vehiculo | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/cars/register/register-car.controller.js')
                }]
            },
            controller: 'registerCarController',
            controllerAs: 'vm'
        })

        .state('main.listCar', {
            url: '/listCar',
            templateUrl: './components/cars/list/list.view.html',
            data: {
                pageTitle: 'Lista Vehiculos | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/cars/list/list.controller.js')
                }]
            },
            controller: 'listCarController',
            controllerAs: 'vm'
        })
        //**Fin Registro de vehiculo */


        $urlRouterProvider.otherwise('/');
    }
})();