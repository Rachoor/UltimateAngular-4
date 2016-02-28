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
                .state('classifieds.new', {
                    url: '/new',
                    templateUrl: 'components/classifieds/new/classifieds.new.tpl.html',
                    controller: 'NewClassifiedsCtrl',
                    controllerAs: 'vm'
                })
                .state('classifieds.edit', {
                    url: '/edit/:id',
                    templateUrl: 'components/classifieds/edit/classifieds.edit.tpl.html',
                    controller: 'EditClassifiedsCtrl',
                    controllerAs: 'vm',
                    params: {
                        classified: null
                    }
                })
        })


})();