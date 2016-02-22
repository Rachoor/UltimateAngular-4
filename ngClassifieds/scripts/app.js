(function () {
    'use strict';

    angular
        .module('ngClassifieds', [
        // Angular Modules

        // 3rd Party Modules
        'ngMaterial',
        'ui.router'
        // Custom Modules

        ])
        .config(function($mdThemingProvider, $stateProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('orange');

            $stateProvider
                .state('one',  {
                    url: '/stateone',
                    template: '<h1>State One</h1>'
                })
                .state('two', {
                    url: '/statetwo',
                    template: '<h1>State Two</h1> <md-button ui-sref="two.more">Go To Nested State</md-button><ui-view></ui-view>'
                })
                .state('two.more', {
                    url: '/more',
                    template: '<h1>Nested State Two.More</h1>'
                });
        })

        .directive("helloWorld", function () {
            return {
                template: "<h1>{{ vm.message }}</h1>"
            }
        });



})();