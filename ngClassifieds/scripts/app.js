(function () {
    'use strict';

    angular
        .module('ngClassifieds', [
        // Angular Modules

        // 3rd Party Modules
        'ngMaterial'
        // Custom Modules

        ])
        .config(function($mdThemingProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('orange');
        })

        .directive("helloWorld", function () {
            return {
                template: "<h1>{{ vm.message }}</h1>"
            }
        });



})();