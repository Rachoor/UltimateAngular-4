(function () {
    'use strict';

    angular
        .module('ngClassifieds')
        .controller('ClassifiedsCtrl', ClassifiedsCtrl)

    ClassifiedsCtrl.$inject = ['$http', 'classifiedsFactory', '$mdSidenav', '$mdToast'];

    function ClassifiedsCtrl ($http, classifiedsFactory, $mdSidenav, $mdToast) {
        var vm = this;
        vm.openSidebar = openSidebar;
        vm.closeSidebar = closeSidebar;
        vm.saveClassified = saveClassified;
        vm.editClassified = editClassified;
        vm.saveEdit = saveEdit;
        vm.showToast = showToast;

        vm.contact = {
            name: "Randy Davis",
            phone: "(555) 555-5555",
            email: "randy@gmail.com"
        }

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

        function saveClassified (classified) {
            if (vm.classified) {
                vm.classified.contact = vm.contact;
                vm.classifieds.push(vm.classified);
                vm.classified = {};
                vm.closeSidebar();
                vm.showToast("Classified Saved");
            }
        }

        function editClassified (classified) {
            vm.editing = true;
            vm.openSidebar();
            vm.classified = classified;
        }

        function saveEdit () {
            vm.editing = false;
            vm.classified = {};
            vm.closeSidebar();
            vm.showToast("Edit Saved");
        }

        function showToast (message) {
            $mdToast.show(
                $mdToast.simple()
                    .content(message)
                    .position('top, right')
                    .hideDelay(3000)
            );
        }
    }
})();