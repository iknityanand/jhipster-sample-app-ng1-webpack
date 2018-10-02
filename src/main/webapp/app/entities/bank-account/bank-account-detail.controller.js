(function() {
    'use strict';

    angular
        .module('jhipsterSampleApplicationNg1App')
        .controller('BankAccountDetailController', BankAccountDetailController);

    BankAccountDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'BankAccount', 'User', 'Operation'];

    function BankAccountDetailController($scope, $rootScope, $stateParams, previousState, entity, BankAccount, User, Operation) {
        var vm = this;

        vm.bankAccount = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('jhipsterSampleApplicationNg1App:bankAccountUpdate', function(event, result) {
            vm.bankAccount = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
