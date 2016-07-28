(function() {
    'use strict';
    
    angular
    .module('taco')
    .controller('categoryController', function category() {
       var vm = this;

       var category1 = {
       	name: "Chimpanzees",
       }

       var category2 = {
       	name:"Monkeys",
       }

       var category3 = {
       	name:"Gorillas",
       }

       vm.data = [category1, category2, category3];

       });
})();