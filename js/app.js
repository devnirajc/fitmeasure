var app = angular.module('currentangu', ['ui', 'ngSanitize', 'ui.router', 'ngFileUpload', 'oitozero.ngSweetAlert', 'angularjs-dropdown-multiselect', 'ngSanitize', 'ui.bootstrap', 'bootstrapLightbox']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "templates/home.html",
            controller: 'mainCtrl'
        })
        .state('menu', {
            url: "/menu",
            templateUrl: "templates/menu.html",
            controller: 'menuCtrl'
        })
        .state('page1', {
            url: "/page1",
            templateUrl: "templates/page1.html",
            controller: 'page1Ctrl'
        })
        .state('page2', {
            url: "/page2",
            templateUrl: "templates/page2.html",
            controller: 'page2Ctrl'
        })
        .state('page3', {
            url: "/page3",
            templateUrl: "templates/page3.html",
            controller: 'page3Ctrl'
        })
        .state('page4', {
            url: "/page4",
            templateUrl: "templates/page4.html",
            controller: 'page4Ctrl'
        });
    $urlRouterProvider.otherwise('home');
});
