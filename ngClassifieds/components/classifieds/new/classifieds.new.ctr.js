(function () {
    'use strict';

    angular
        .module('ngClassifieds')
        .controller('NewClassifiedsCtrl', NewClassifiedsCtrl)

    NewClassifiedsCtrl.$inject = ['$scope', '$http', 'classifiedsFactory', '$mdSidenav', '$timeout', '$mdToast', '$mdDialog', '$state']

    function NewClassifiedsCtrl ($scope, $http, classifiedsFactory, $mdSidenav, $timeout, $mdToast, $mdDialog, $state) {
        var vm = this;
        vm.closeSidebar = closeSidebar;
        vm.saveClassified = saveClassified;

        $timeout(function () {
            $mdSidenav('left').open()
        });

        $scope.$watch('vm.sidenavOpen', function (sidenav) {
            if (sidenav === false) {
                $mdSidenav('left')
                    .close()
                    .then(function () {
                        $state.go('classifieds');
                    });
            }
        });

        function closeSidebar() {
            vm.sidenavOpen = false;
        }

        function saveClassified (classified) {
            if (classified) {

                classified.contact = {
                    name: "Randy Davis",
                    phone: "(555) 555-5555",
                    email: "randy@gmail.com"
                };

                $scope.$emit('newClassified', classified);
                vm.sidenavOpen = false;
            }
        }


    }
})();