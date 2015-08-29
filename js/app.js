angular.module("SulyokShoes-app-hu", ['ui.router', 'common'])
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                        .state('menu1', {
                            url: '/Bemutatkozas',
                            templateUrl: './templates/menu1.php',
                            controller: function () {
                                initJssor();
                            }
                        })
                        .state('menu2', {
                            url: '/Termekbemutato',
                            templateUrl: './templates/menu2.php'
                        })
                        .state('menu2.sub1', {
                            parent: 'menu2',
                            url: '/Ferfimodellek',
                            templateUrl: './templates/menu2_1.php',
                            controller: function () {
                                $('.isotope a').touchTouch();
                            }
                        })
                        .state('menu2.sub2', {
                            parent: 'menu2',
                            url: '/Noimodellek',
                            templateUrl: './templates/menu2_2.php',
                            controller: function () {
                                $('.isotope a').touchTouch();
                            }
                        })
                        .state('menu3', {
                            url: '/Technologia',
                            templateUrl: './templates/menu3.php',
                            controller: function () {
                                $('.isotope a').touchTouch();
                            }
                        })
                        .state('menu4', {
                            url: '/Kapcsolat',
                            templateUrl: './templates/menu4.php'
                        });

                $urlRouterProvider.otherwise('Bemutatkozas');
            }]);
angular.module("SulyokShoes-app-en", ['ui.router', 'common'])
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                        .state('menu1', {
                            url: '/Introduction',
                            templateUrl: './templates/menu1.php',
                            controller: function () {
                                initJssor();
                            }
                        })
                        .state('menu2', {
                            url: '/Products',
                            templateUrl: './templates/menu2.php'
                        })
                        .state('menu2.sub1', {
                            parent: 'menu2',
                            url: '/Mensfootwear',
                            templateUrl: './templates/menu2_1.php',
                            controller: function () {
                                $('.isotope a').touchTouch();
                            }
                        })
                        .state('menu2.sub2', {
                            parent: 'menu2',
                            url: '/Womensfootwear',
                            templateUrl: './templates/menu2_2.php',
                            controller: function () {
                                $('.isotope a').touchTouch();
                            }
                        })
                        .state('menu3', {
                            url: '/Technology',
                            templateUrl: './templates/menu3.php',
                            controller: function () {
                                $('.isotope a').touchTouch();
                            }
                        })
                        .state('menu4', {
                            url: '/Contact',
                            templateUrl: './templates/menu4.php'
                        });


                $urlRouterProvider.otherwise('Introduction');
            }]);

angular.module("common", [])
        .directive("routerhref", function ($compile) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var el = $compile('<a ui-sref="' + attrs.link + '">' + attrs.text + '</a>')(scope);
                    element.children().remove();
                    element.append(el);
                }
            };
        })
        .run(['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromPatams) {
                });
            }
        ]);