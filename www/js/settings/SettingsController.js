'use strict';

function SettingsController(SettingsService, $mdToast) {
	var vm = this;
	
	vm.settingsService = SettingsService;
	vm.mdToast = $mdToast;
	
	vm.settings = vm.settingsService.getSettings();
}

SettingsController.prototype.updateSettings = function(settingsFormData) {
	// Need to update weight given date
	this.settingsService.updateSettings(settingsFormData);
	this.mdToast.show(this.mdToast.simple().textContent('Settings updated!'));
}

angular.module('Foods').controller('SettingsController', SettingsController);