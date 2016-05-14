function HeaderController(SettingsService) {
	var vm = this;
	
	vm.settingsService = SettingsService;
	
	vm.settings = vm.settingsService.getSettings();
	
	vm.weight = vm.settings.weight;
}

angular.module('Foods').controller('headerController', HeaderController);
