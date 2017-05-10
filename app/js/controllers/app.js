(function () {
    'use strict';

    angular
        .module('App')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$ionicPopover','$state'];
    function AppController($scope, $ionicPopover,$state) {
        
        // $scope.items = [
        //     {
        //         color: "#E47500",
        //         icon: "ion-ionic",
        //         title: "Dashboard"
        //     },
        //     {
        //         color: "#5AD863",
        //         icon: "ion-social-html5",
        //         title: "HTML5"
        //     },
        //     {
        //         color: "#F8E548",
        //         icon: "ion-social-javascript",
        //         title: "JS"
        //     },
        //     {
        //         color: "#AD5CE9",
        //         icon: "ion-social-sass",
        //         title: "Sass"
        //     },
        //     {
        //         color: "#3DBEC9",
        //         icon: "ion-social-css3",
        //         title: "CSS3"
        //     },
        //     {
        //         color: "#D86B67",
        //         icon: "ion-social-angular",
        //         title: "Angular"
        //     }
        // ];

        $scope.exitApp = function () {
            //ionic.Platform.exitApp();
            console.log("called");
            $state.go("login");
        };

        $ionicPopover.fromTemplateUrl('templates/modals/popover.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.popover = popover;
        });

        $scope.openPopover = function ($event) {
            $scope.popover.show($event);
        };
        
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });

    }
})();