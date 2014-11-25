/// <reference path='../_all.ts' />

module ranktab {
  
    interface ILoginScope {
        username: string;
        password: string;
    }
    
    class LoginCtrl {
        constructor(private $scope: ILoginScope) {
           console.log("I'm login");
        } 
    }


    function loginConfig ($stateProvider: ng.ui.IStateProvider) {
       var state: ng.ui.IState = {
           url: '/login',
           views: {
               menuContent: {
               templateUrl: 'templates/login.html',
               controller: 'LoginCtrl'
               }
           }
       };
       
       $stateProvider.state('app.login', state);
    }   
    

    ranktab.app.controller('LoginCtrl', LoginCtrl);
    ranktab.app.config(loginConfig);
   
}
