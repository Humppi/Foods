'use strict';

function FoodsController($mdDialog, FoodsService, $mdToast) {
    var vm = this;

    vm.mdDialog = $mdDialog;
    vm.mdToast = $mdToast;
    vm.foodsService = FoodsService;

    vm.foods = vm.foodsService.getMyFoods();
    vm.selectedFoods = [];

    vm.buttonDisabledStates = {
        add: true,
        remove: true
    };
}

FoodsController.prototype.selectFood = function (food, list) {
    var index = list.indexOf(food);
    if (index > -1) {
        list.splice(index, 1);
    } else {
        list.push(food);
    }

    if (list.length === 0) {
        this.buttonDisabledStates.add = true;
        this.buttonDisabledStates.remove = true;
    } else {
        this.buttonDisabledStates.add = false;
        this.buttonDisabledStates.remove = false;
    }
}

FoodsController.prototype.openFoodDetails = function (event, food) {
    var htmlContentValue = '';
    
    angular.forEach(food.macros, function(macroValue, macroTitle) {
        htmlContentValue += '<div>' + _.toUpper(macroTitle) + ' : ' + '<b>' + macroValue + '</b>' + '</div>';
    });
    
    this.mdDialog.show(
        this.mdDialog.alert()
            .title(food.title)
            .htmlContent(htmlContentValue)
            .ariaLabel('Food info')
            .ok('Close')
            .targetEvent(event)
    );
}

FoodsController.prototype.addDailyFoods = function () {
    // Async call with toast in success
    // This also has to poll the weight if food has that attribute
    this.foodsService.addDailyFoods(this.selectedFoods);
    this.mdToast.show(this.mdToast.simple().textContent('Daily foods added!'));
}

FoodsController.prototype.removeSelectedFoods = function () {
    this.foodsService.removeFoods(this.selectedFoods);
    if(!this.foods.length) {
        this.buttonDisabledStates.add = true;
        this.buttonDisabledStates.remove = true;
    }
    this.selectedFoods.length = 0;
}

FoodsController.prototype.addNewFood = function () {
}

angular.module('Foods')
    .controller('FoodsController', FoodsController);