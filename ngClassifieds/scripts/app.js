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
                .state('classifieds',  {
                    url: '/classifieds',
                    templateUrl: 'components/classifieds/classifieds.tpl.html',
                    controller: 'ClassifiedsCtrl',
                    controllerAs: 'vm'
                })
        })


})();