function SettingsService() {

	var _settings = {
		weightQueryInterval: 1,
		weight : 80.3
	}

	var getSettings = function getSettings() {
		return _settings;
	}
	
	var updateSettings = function updateSettings(newSettings) {
		_settings = newSettings;	
	};

	return {
		getSettings: getSettings,
		updateSettings : updateSettings
	}

}

angular.module('Foods').factory('SettingsService', SettingsService);
