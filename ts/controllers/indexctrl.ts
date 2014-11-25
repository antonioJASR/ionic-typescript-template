/// <reference path='../_all.ts' />

module ranktab {

    interface IIndexScope {
    
    }

    class IndexCtrl {
        constructor(private $scope: IIndexScope) {

        }
    }
    
    function setRouteState ($stateProvider: ng.ui.IStateProvider) {
       var state: ng.ui.IState = {
           url: '/index',
           views: {
               menuContent: {
               templateUrl: 'templates/index.html',
               controller: 'IndexCtrl'
               }
           }
       };
       
       $stateProvider.state('app.index', state);
    }   
    
    
    ranktab.app.controller('IndexCtrl', IndexCtrl);
    ranktab.app.config(setRouteState);
    
}