(function() {
    'use strict';
    angular
        .module('taco')
        .factory('monkeys', function($http) {

            var vm = this;

            function getMonkeys() {
                var monkey1 = {
                    name: "Steve",
                    image: "images/chimp.jpg",
                    summary: "A great chimp for you to take home",
                    price: 200,
                    category: 1,
                    id: 0,
                }
                var monkey2 = {
                    name: "Rob",
                    image: "images/chimp.jpg",
                    summary: "A great chimp for you to take home",
                    price: 200,
                    category: 1,
                    id: 1,
                }
                var monkey3 = {
                    name: "Dave",
                    image: "images/chimp.jpg",
                    summary: "A great chimp for you to take home",
                    price: 200,
                    category: 1,
                    id: 2,
                }
                var monkey4 = {
                    name: "Juan",
                    image: "images/monkey.jpg",
                    summary: "A great monkey for you to take home",
                    price: 200,
                    category: 2,
                    id: 3,
                }
                var monkey5 = {
                    name: "Carlos",
                    image: "images/monkey.jpg",
                    summary: "A great monkey for you to take home",
                    price: 200,
                    category: 2,
                    id: 4,
                }
                var monkey6 = {
                    name: "Pierre",
                    image: "images/monkey1.jpg",
                    summary: "A great gorilla for you to take home",
                    price: 200,
                    category: 3,
                    id: 5,
                }
                var monkey7 = {
                    name: "Arnaud",
                    image: "images/monkey1.jpg",
                    summary: "A great gorilla for you to take home",
                    price: 200,
                    category: 3,
                    id: 6,
                }
                return data,

            }

            vm.data = [monkey1, monkey2, monkey3, monkey4, monkey5, monkey6, monkey7];

            return {
                getMonkeys,
            }
        })
})();


