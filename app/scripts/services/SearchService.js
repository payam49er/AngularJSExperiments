/**
 * Created by payam on 8/31/14.
 */

'use strict';

angular.module('formulaOneApp').factory('SearchService', function ($http) {

    this.inputError = null;
    this.getStuff = function (query, callback) {
        var season = query.season;
        var round = query.round;


        if (season !== null && !isNaN(season) && round !==null && !isNaN(round)) {
            var url = 'http://ergast.com/api/f1/' + season + '/' + round + '/driverStandings.json?callback=JSON_CALLBACK';
            $http({
                method: 'JSONP',
                url: url
            }).success(function (response,status) {
                callback(response,status);
            });
        }
        else{
           this.inputError = 'invalid';
        }
    };
    return this;

});

