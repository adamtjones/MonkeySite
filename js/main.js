(function() {
    'use strict';
    angular
        .module('taco', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/views/home.html'
                })
                .state('itemCategoryList', {
                    url: '/itemCategoryList',
                    templateUrl: 'itemCategoryList.html',
                    controller: 'UserController',
                    controllerAs: 'users'
                })
                .state('itemList', {
                    url: '/itemList',
                    templateUrl: 'itemList.html',
                    controller: 'UserController',
                    controllerAs: 'users'
                })
                .state('itemDetails', {
                    url: '/itemDetails',
                    templateUrl: 'itemDetails.html',
                    controller: 'UserController',
                    controllerAs: 'users'
                });
        });
})();