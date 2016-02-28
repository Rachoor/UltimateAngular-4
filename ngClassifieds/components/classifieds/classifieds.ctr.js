(function () {
    'use strict';

    angular
        .module('ngClassifieds')
        .controller('ClassifiedsCtrl', ClassifiedsCtrl)

    ClassifiedsCtrl.$inject = ['$scope','$http', 'classifiedsFactory', '$mdSidenav', '$mdToast', '$mdDialog', '$state'];

    function ClassifiedsCtrl ($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog, $state) {
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
            });

        $scope.$on('newClassified', function (event, classified) {
            classified.id = vm.classifieds.length + 1;
            vm.classifieds.push(classified);
            showToast('Classified Saved!');
        });

        $scope.$on('editSaved', function(event, message) {
            showToast(message);
        })

        function openSidebar (){
            $state.go('classifieds.new');
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
            $state.go('classifieds.edit', {
                id: classified.id,
                classified: classified
            });
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