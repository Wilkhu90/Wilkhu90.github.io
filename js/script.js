// create the module and name it resumeApp
    var resumeApp = angular.module('resumeApp', ['ngRoute']);

    // configure our routes
    resumeApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            .when('/blog',{
                templateUrl : 'pages/post.html',
                controller  : 'PostController'
            })
            .when('/blog/:id',{
                templateUrl : 'pages/article.html',
                controller  : 'ArticleController'
            })

            .otherwise({
                redirectTo: '/'
            });
    });

    // create the controller and inject Angular's $scope
    resumeApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    resumeApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    resumeApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    resumeApp.controller('PostController', ['$scope', '$http', function($scope, $http) {
        $http.get('json/post.json', {cache: true}).success(function(data){
            $scope.postData = data;
    });
    
    }]);

    resumeApp.controller('ArticleController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
        $http.get('json/post.json', {cache: true}).success(function(data){
            $scope.post = data[$routeParams.id];
        });
    }]);