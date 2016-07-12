(function() {
    'use strict';
    angular
        .module('Dallas', ['ui.router']);

    (function() {
        myApp.config(appConfig);

        appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

        function appConfig($stateProvider, $urlRouterProvider) {
            // module configuration...
            $urlRouterProvider.otherwise('/');
        }


        $stateProvider
        // ...
        .state('userList.detail', {
            url: '/:id',
            templateUrl: 'partials/user.html',
            controller: 'UserController'
        });
        /*controllerAs: 'user';*/

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'index.html'
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

    

    UserController.$inject = ['$stateParams'];

    function UserController($stateParams) {
        this.users = [];
        this.user = {};

        if ($stateParams.id) {
            this.user = findUser($stateParams.id);
        } else {
            this.users = getUserList();
        }

        function findUser(id) { /* code to find a single user */ }

        function getUserList() { /* code to get list of users */ }
    }

	});
});










/*.controller('HeaderController', function Header() {
            this.data = [
			  { "id": 2957, "name": "widget", "price": 32, "quantity": 203, "color": "red", "discount": 31 },
			  { "id": 89274, "name": "golf club", "price": 98, "quantity": 10, "color": "black", "discount": 0 },
			  { "id": 64, "name": "iPhone", "price": 499, "quantity": 2, "color": "white", "discount": 0 },
			  { "id": 87363, "name": "bonzai tree", "price": 76, "quantity": 2, "color": "green", "discount": 0 },
			  { "id": 1736, "name": "towel", "price": 55, "quantity": 30, "color": "brown", "discount": 10 },
			  { "id": 4836, "name": "dog bed", "price": 99, "quantity": 10, "color": "beige", "discount": 50 },
			  { "id": 829, "name": "waste basket", "price": 15, "quantity": 40, "color": "silver", "discount": 0 },
			  { "id": 46, "name": "guitar", "price": 899, "quantity": 3, "color": "blue", "discount": 150 },
			  { "id": 17456, "name": "matcha tea", "price": 42, "quantity": 4, "color": "green", "discount": 11 },
			  { "id": 3292, "name": "enlightenment", "price": 99999, "quantity": 1, "color": "red", "discount": 0 },
			  { "id": 533, "name": "eggs", "price": 5, "quantity": 12, "color": "brown", "discount": 1 },
			  { "id": 683, "name": "pillow", "price": 27, "quantity": 10, "color": "black", "discount": 12 }
			];

	var randomNumber = Math.floor(Math.random()*20001);
	console.log(randomNumber);

		this.submit = function (isValid) {
		var newObj = {"id": randomNumber, "name": this.form.name, "price": this.form.price, "quantity": this.form.quantity, "color": this.form.color, "discount": this.form.discount };
		
		if (isValid) {
			this.data.push(newObj);
			this.form = [];
	}
	
	};

        
    });
})();*/