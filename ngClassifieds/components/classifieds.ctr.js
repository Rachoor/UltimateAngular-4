(function () {
    'use strict';

    angular
        .module('ngClassifieds')
        .controller('ClassifiedsCtrl', ClassifiedsCtrl)

    ClassifiedsCtrl.$inject = [];

    function ClassifiedsCtrl () {
        var vm = this;
        vm.classified = {
            title: 'First Item',
            price: '$1,000,000.00',
            description: "A fancy used stove.  It is made of stainless steel and you can cook burgers on it.  It has a matching vent hood."
        }

        vm.message = "Hello World!!!!!!!!";

    }
})();