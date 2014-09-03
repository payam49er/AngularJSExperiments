/**
 * Created by payam on 8/30/14.
 */
'use strict';

angular.module('formulaOneApp').controller('SearchCtrl',function($scope, SearchService){

    $scope.season = null;
    $scope.rounds = null;

    var statusResult = null;

    $scope.search = function() {
        var query = {
            season:$scope.season,
            round: $scope.rounds
        };

        SearchService.getStuff(query, function(data,status){
        try{
            statusResult = status;
            $scope.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }catch(err){
             statusResult = 'error';
        }
     });


    };

    $scope.checkResult = function(){

        if(statusResult === 200)
        {
            return true;
        }
        return false;
    };

    $scope.error= function(){

        if(statusResult === 'error' && statusResult !== 200)
        {
            return false;
        }

        return true;
    };

    $scope.noResult = function(){
        if(SearchService.inputError === 'invalid' && statusResult !== 200){
            return false;
        }
        return true;
    };

    $scope.searchFilter = function(driver){
        var keyword = new RegExp($scope.nameFilter,'i');
        return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
    };

});