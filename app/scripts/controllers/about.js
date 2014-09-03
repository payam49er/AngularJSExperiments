'use strict';

/**
 * @ngdoc function
 * @name formulaOneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the formulaOneApp
 */
angular.module('formulaOneApp').controller('about',function ($scope,$sce){

    $scope.search = function(searchterm){

        var url = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyCDf_kcMbACi1J5m8z_kaS4pVeZA68xcZ0&q='+searchterm+'+in+Cambridge+MA';
        $scope.mapUrl = $sce.trustAsResourceUrl(url);

    };

    var init = function(){
        $scope.mapUrl = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/search?key=AIzaSyCDf_kcMbACi1J5m8z_kaS4pVeZA68xcZ0&q= Cambridge+MA');
    };

    init();
});
