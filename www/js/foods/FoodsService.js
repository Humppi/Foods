'use strict';

/**
 * Food data model:
 * {
 *  title,
 *  weight (null = no poll, empty string = poll),
 *  macro values {
 *      protein,
 *      carbs,
 *      fat,
 *      fibre,
 *      (salt?)
 *  }
 * }
 */

function FoodsService() {
    
    // Eventually from server API
    var _myFoods = [
        {
            title : 'Fit rahka, koska lifestyle',
            weight : null
        },
        {
            title : 'Mass night prode',
            weight : null
        },
        {
            title : 'Kariniemen kananpojan minuuttipihvi (yrtti/vsipuli)',
            weight : ''
        }
    ];

    var _dailyFoods = [];

    var getMyFoods = function getMyFoods() {
        // API call, cache _myFoods and serve from cache
        return _myFoods;
    };

    var addNewFood = function addNewFood(foodObject) {
        // API call and update _myFoods
        _myFoods.push(foodObject);
    };
    
    var removeFoods = function removeFoods(foodObjectsArray) {
        angular.forEach(foodObjectsArray, function(foodObject) {
            var index = _myFoods.indexOf(foodObject);
            if(index > -1) {
                _myFoods.splice(index, 1);
            }
        });
    }

    var getDailyFoods = function getDailyFoods() {
        // API call, cache _dailyFoods and serve from cache
        return _dailyFoods;
    };

    var addDailyFoods = function addDailyFoods(foodObjectsArray) {
        // API call, and update _dailyFoods
        if (foodObjectsArray) {
            angular.forEach(foodObjectsArray, function (foodObject) {
                _dailyFoods.push(foodObject);
            });
        }
    };
    
    var removeDailyFoods = function removeDailyFoods(foodObjectsArray) {
        // API call, and update _dailyFoods
        angular.forEach(foodObjectsArray, function(foodObject) {
            var index = _dailyFoods.indexOf(foodObject);
            if(index > -1) {
                _dailyFoods.splice(index, 1);
            }
        });
    }

    return {
        getMyFoods: getMyFoods,
        addNewFood: addNewFood,
        removeFoods : removeFoods,
        getDailyFoods: getDailyFoods,
        addDailyFoods: addDailyFoods,
        removeDailyFoods : removeDailyFoods
    }
}

angular.module('Foods')
    .factory('FoodsService', FoodsService);