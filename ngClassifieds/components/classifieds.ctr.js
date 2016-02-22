(function () {
    'use strict';

    angular
        .module('ngClassifieds')
        .controller('ClassifiedsCtrl', ClassifiedsCtrl)

    ClassifiedsCtrl.$inject = ['$http', 'classifiedsFactory', '$mdSidenav', '$mdToast', '$mdDialog'];

    function ClassifiedsCtrl ($http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {
        var vm = this;

        vm.categories;
        vm.classified;
        vm.classifieds;
        vm.closeSidebar = closeSidebar;
        vm.deleteClassified = deleteClassified;
        vm.editClassified = editClassified;
        vm.editing;
        vm.getCategories = getCategories;
        vm.openSidebar = openSidebar;
        vm.saveClassified = saveClassified;
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
                vm.categories = getCategories(vm.classifieds);
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

        function deleteClassified (event, classified) {
            var confirm = $mdDialog.confirm()
                .title('Are you sure you want to delete ' + classified.title + '?')
                .ok('Yes')
                .cancel('No')
                .targetEvent(event)
            $mdDialog.show(confirm)
                .then(function () {
                    var index = vm.classifieds.indexOf(classified);
                    vm.classifieds.splice(index, 1);
                }, function () {

                });
        }

        function getCategories (classifieds) {
            var categories = [];

            angular.forEach(classifieds, function (item) {
                angular.forEach(item.categories, function (category) {
                    categories.push(category);
                });
            });

            return _.uniq(categories);
        }
    }
})();