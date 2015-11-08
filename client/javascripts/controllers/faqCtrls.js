/* FAQ Controllers Controllers */
  
var faqCtrls = angular.module('faqCtrls', []);


faqCtrls.controller('faqCtrl',[
'$scope',
function($scope){
	$scope.title = "faqCtrl"
}]);


faqCtrls.controller('faqListCtr', ['$scope', 'faqListService',
  function($scope, faqListService) {

	$scope.getFaqList = function(){
		console.log('getCandidates()');
		$scope.faqList = faqListService.getFaqList();
    };

}]);