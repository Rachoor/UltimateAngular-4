(function () {
    'use strict';

    angular
        .module('ngClassifieds')
        .controller('ClassifiedsCtrl', ClassifiedsCtrl)

    ClassifiedsCtrl.$inject = ['$http', 'classifiedsFactory', '$mdSidenav'];

    function ClassifiedsCtrl ($http, classifiedsFactory, $mdSidenav) {
        var vm = this;
        vm.openSidebar = openSidebar;
        vm.closeSidebar = closeSidebar;

        classifiedsFactory.getClassifieds()
            .then (function (classifieds) {
                console.log(classifieds);
                vm.classifieds = classifieds.data;
            })

        function openSidebar (){
            $mdSidenav('left').open();
        }

        function closeSidebar () {
            $mdSidenav('left').close();
        }
    }
})();