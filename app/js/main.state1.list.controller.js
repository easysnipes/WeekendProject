(function() {
    'use strict';

    angular
        .module('app')
        .controller('State1ListController', State1ListController);

    State1ListController.$inject = ['getDronestreams', '$stateParams'];



    /* @ngInject */
    function State1ListController(getDronestreams, $stateParams) {
        var vm = this;
        
        vm.number=$stateParams.number;
        vm.deaths=$stateParams.deaths;
        vm.country=$stateParams.country;    
        vm.location=$stateParams.location;
        vm.narrative=$stateParams.narrative;
        vm.link=$stateParams.link;
        vm.day=$stateParams.day;
        vm.month=$stateParams.month;
        vm.year=$stateParams.year;

    }
})();

