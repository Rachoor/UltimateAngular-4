(function () {
    'use strict';

    angular
        .module('ngClassifieds')
        .controller('ClassifiedsCtrl', ClassifiedsCtrl)

    ClassifiedsCtrl.$inject = ['$http', 'classifiedsFactory'];

    function ClassifiedsCtrl ($http, classifiedsFactory) {
        var vm = this;

        classifiedsFactory.getClassifieds()
            .then (function (classifieds) {
                console.log(classifieds);
                vm.classifieds = classifieds.data;
            })
    }
})();