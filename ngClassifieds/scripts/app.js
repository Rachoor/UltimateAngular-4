(function () {
    'use strict';

    angular.module('ngClassifieds', [])
        .controller('TestCtrl', TestCtrl)

    function TestCtrl () {
        var vm = this;
        vm.message = 'Hello World!';

    }


})();