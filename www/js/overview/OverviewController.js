'use strict';

function OverviewController(SettingsService, FoodsService) {
    var vm = this;
	
	vm.settingsService = SettingsService;
    vm.foodsService = FoodsService;
	
	vm.settings = vm.settingsService.getSettings();
    vm.buttonDisabledStates = {
        remove : true
    }
    
    vm.dailyFoods = vm.foodsService.getDailyFoods();
    
    vm.selectedDailyFoods = [];
}

OverviewController.prototype.selectFood = function selectFood(food, list) {
    var index = list.indexOf(food);
    if (index > -1) {
        list.splice(index, 1);
    } else {
        list.push(food);
    }

    if (list.length === 0) {
        this.buttonDisabledStates.remove = true;
    } else {
        this.buttonDisabledStates.remove = false;
    }
}

OverviewController.prototype.removeSelectedDailyFoods = function removeSelectedDailyFoods() {
    this.foodsService.removeDailyFoods(this.selectedDailyFoods);
    if(!this.dailyFoods.length) {
        this.buttonDisabledStates.remove = true;
    }
    this.selectedDailyFoods.length = 0;
}

angular.module('Foods')
    .controller('OverviewController', OverviewController);