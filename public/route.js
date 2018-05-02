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

        .state('clients', {
            url: '/clients',
            templateUrl: './components/users/clients/clients.view.html',
            data: {
                pageTitle: 'Registrate | Royal Cars'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                    return $ocLazyLoad.load('./components/users/clients/clients.controller.js')
                }]
            },
            controller: 'clientsController',
            controllerAs: 'vm'
        })

        $urlRouterProvider.otherwise('/');
    }
})();