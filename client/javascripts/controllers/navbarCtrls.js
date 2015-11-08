/* FAQ Controllers Controllers */
  
var navbarCtrls = angular.module('navbarCtrls', []);


navbarCtrls.controller('navbarCtrl',[
'$scope', '$location',
function($scope, $location){
	$scope.title = "navbarCtrl";

	$scope.isActive = function (viewLocation) {
	     var active = (viewLocation === $location.path());
	     return active;
	};

}]);

navbarCtrls.directive('isActiveNav', [ '$location', function($location) {
return {
 restrict: 'A',
 link: function(scope, element) {

    console.log(element);

   scope.location = $location;

   scope.$watch('location.path()', function(currentPath) {

    	currentPath = currentPath.substr(1, currentPath.length);
    	if(currentPath.indexOf('/') > -1){
			 currentPath = currentPath.substr(0, currentPath.indexOf('/'));
    	} 	
    	
     if('/#/' + currentPath === element[0].attributes['href'].nodeValue) {
       element.parent().addClass('active');
     } else {
       element.parent().removeClass('active');
     }
   });
 }
 };
}]);
