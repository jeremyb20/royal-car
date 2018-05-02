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


        .state('main.principal',{
            url: '/principal',
            templateUrl: './components/main/principal/principal.view.html',
            data: {
                pageTitle: 'Página principal | Royal Cars'
            }
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

        //*Registro Clientes */

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

        //**Registro de encargado */

        .state('registerCharge', {
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


        $urlRouterProvider.otherwise('/');
    }
})();