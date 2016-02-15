(function () {
    'use strict';

    angular
        .module('ngClassifieds')
        .controller('ClassifiedsCtrl', ClassifiedsCtrl)

    ClassifiedsCtrl.$inject = ['$http'];

    function ClassifiedsCtrl ($http) {
        var vm = this;

        $http.get('data/classifieds.json')
            .then (function (classifieds) {
                console.log(classifieds);
                vm.classifieds = classifieds.data;
            })
    }
})();