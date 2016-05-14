'use strict';

/**
 * Food data model:
 * {
 *  title,
 *  weight (null = no poll, empty string = poll),
 *  macro values {
 *      kcal,
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
            weight : null,
            macros : {
                kcal : 120,
                protein : 20,
                carbohydrates : 8,
                fat : 0.6
            }
        },
        {
            title : 'Mass triple night (25g)',
            weight : null,
            macros : {
                kcal : 97,
                protein : 21.11,
                carbohydrates : 1.14,
                fat : 0.79
            }
        },
        {
            title : 'Kariniemen kananpojan minuuttipihvi (yrtti/vsipuli)',
            weight : '',
            macros : {
                kcal : 120,
                protein : 20,
                carbohydrates : 0.7,
                fat : 4.3
            }
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