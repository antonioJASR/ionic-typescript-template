/// <reference path='_all.ts' />

// this hide message errors from compiler
interface Window {
    cordova: any;
    StatusBar: any;
}

module ranktab {

    export var app: ng.IModule = angular.module('ionicapp', ['ionic']);

    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if(window.StatusBar) {
        // org.apache.cordova.statusbar required
            window.StatusBar.styleDefault();
        }
        });
    });
    
    app.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('app', {
          url: "/app",
          abstract: true,
          templateUrl: "templates/menu.html",
          controller: 'AppCtrl'
        });


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/index');
    });
    
}
