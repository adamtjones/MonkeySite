(function() {
    'use strict';
    angular
        .module('taco', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/views/partials/home.html',
                    controller: 'mainController',
                    controllerAs: 'controller'
                })
                .state('itemCategoryList', {
                    url: '/itemCategoryList',
                    templateUrl: '/views/partials/itemCategoryList.html',
                    controller: 'categoryController',
                    controllerAs: 'controller'
                })
                .state('itemList', {
                    url: '/itemList',
                    templateUrl: '/views/partials/itemList.html',
                    controller: 'itemController',
                    controllerAs: 'controller'
                })
                .state('itemDetails', {
                    url: '/itemDetails',
                    templateUrl: '/views/partials/itemDetailPage.html',
                    controller: 'detailController',
                    controllerAs: 'controller'
                });
        });
})();