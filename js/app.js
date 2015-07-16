angular.module("SulyokShoes-app-hu", ['ui.router', 'common'])
        .config([
            '$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                        .state('menu1', {
                            url: '/Bemutatkozas',
                            templateUrl: './templates/menu1.php'
                        })
                        .state('menu2', {
                            url: '/Termekbemutato',
                            templateUrl: './templates/menu2.php'
                        })
                        .state('menu2.sub1', {
                            parent: 'menu2',
                            url: '/Ferfimodellek',
                            templateUrl: './templates/menu2_1.php'
                        })
                        .state('menu2.sub2', {
                            parent: 'menu2',
                            url: '/Noimodellek',
                            templateUrl: './templates/menu2_2.php'
                        })
                        .state('menu3', {
                            url: '/Technologia',
                            templateUrl: './templates/menu3.php'
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
                            url: '/Aboutus',
                            templateUrl: './templates/menu1.php'
                        })
                        .state('menu2', {
                            url: '/Products',
                            templateUrl: './templates/menu2.php'
                        })
                        .state('menu2.sub1', {
                            parent: 'menu2',
                            url: '/Malemodels',
                            templateUrl: './templates/menu2_1.php'
                        })
                        .state('menu2.sub2', {
                            parent: 'menu2',
                            url: '/Femalemodels',
                            templateUrl: './templates/menu2_2.php'
                        })
                        .state('menu3', {
                            url: '/Technology',
                            templateUrl: './templates/menu3.php'
                        })
                        .state('menu4', {
                            url: '/Contact',
                            templateUrl: './templates/menu4.php'
                        });
                        

                $urlRouterProvider.otherwise('menu1');
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
        });