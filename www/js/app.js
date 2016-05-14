// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Foods', ['ionic', 'ngCordova', 'ngMaterial', 'ui.router'])
	.config(function ($mdIconProvider, $urlRouterProvider, $stateProvider) {
		$mdIconProvider
			.icon('home', 'img/ic_home_black_18px.svg', 18)
			.icon('foods', 'img/ic_view_list_black_18px.svg', 18)
			.icon('settings', 'img/ic_settings_black_18px.svg', 18)
			.icon('done', 'img/ic_done_white_18px.svg', 18)
			.icon('info', 'img/ic_announcement_black_18px.svg', 18)
			.icon('menu', 'img/ic_menu_white_18px.svg', 18);
			
		$urlRouterProvider.otherwise('overview');

		$stateProvider
			.state('overview', {
				url: '/overview',
				templateUrl: 'templates/overview.html',
				controller: 'OverviewController as ctrl'
			})
			.state('foods', {
				url: '/foods',
				templateUrl: 'templates/foods.html',
				controller: 'FoodsController as ctrl'
			})
			.state('settings', {
				url: '/settings',
				templateUrl: 'templates/settings.html',
				controller: 'SettingsController as ctrl'
			})
	})

	.run(function ($ionicPlatform, $cordovaSQLite) {
		$ionicPlatform.ready(function () {
			if (window.cordova && window.cordova.plugins.Keyboard) {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

				// Don't remove this line unless you know what you are doing. It stops the viewport
				// from snapping when text inputs are focused. Ionic handles this internally for
				// a much nicer keyboard experience.
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	});
