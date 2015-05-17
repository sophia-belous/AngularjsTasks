var pages = angular.module('pages', ['ui.bootstrap', 'ngRoute']);

pages.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/Content', {
            templateUrl: 'Content.html',
            controller: 'ContentCtrl'
        }).
          when('/About', {
              templateUrl: 'About.html',
              controller: 'AboutCtrl'
          }).
        otherwise({
            redirectTo: ''
        });
  }]);

pages.controller('PageController', function ($scope) {
    $scope.currentPage = 1;
    $scope.numPerPage = 10;
    $scope.maxSize = 5;

     $scope.$watch('currentPage + numPerPage', function () {
         var begin = (($scope.currentPage - 1) * $scope.numPerPage)
         , end = begin + $scope.numPerPage;
     });
});

pages.controller('ButController', function () { })
.directive('button', function () {
    return {
        restrict: 'E',
        compile: function (element, attributes) {
            element.addClass('btn');
            if (attributes.type === 'submit') {
                if (attributes.color) {
                    element.addClass('btn-' + attributes.color);
                }
                else {
                    element.addClass('btn-primary');
                }                
            }

            if (attributes.size) {
                element.addClass('btn-' + attributes.size);
            }
        }
    };
});

pages.controller("AppCtrl", function ($scope) {
    $scope.items = [
    { name: "Bob", email: "Bob@gmail.com", details: "Bob detailsBob detailsBob detailsBob detailsBob detailsBob detailsBob detailsBob detailsBob detailsBob details" },
    { name: "Jane", email: "Jane@gmail.com", details: "Jane details" },
    { name: "Bill", email: "Bill@gmail.com", details: "Bill details" }
    ]
    $scope.toggleDetail = function ($index) {
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };
});



pages.controller('ContentCtrl', function ($scope) {

    $scope.message = 'This is Content screen';

});


pages.controller('AboutCtrl', function ($scope) {

    $scope.message = 'This is About screen';

});

