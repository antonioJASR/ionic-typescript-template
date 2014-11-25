
module ranktab {

    interface IAppScope {
    
    }

    class AppCtrl {
        constructor(private $scope: IAppScope) {
        }
    }
    
    ranktab.app.controller('AppCtrl', AppCtrl);
    
}