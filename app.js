(function() {
    'use strict';

    angular
        .module('ngValid', [])
        .directive('ngValid', ngValid);

    function ngValid() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                ngValid: '&',
                ngInvalid: '&'
            },
            link: function($scope, $element, $attrs, ngModel) {
                $scope.$watch(function () {
                    return ngModel.$modelValue;
                }, function() {
                    if (ngModel.$valid) {
                        $scope.ngValid();
                    }
                    else {
                        $scope.ngInvalid();
                    }
                });
            }
        };
    }
})();
