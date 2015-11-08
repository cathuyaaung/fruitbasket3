/* Candidate Controllers */
  
var candidateCtrls = angular.module('candidateCtrls', ['candidateServices']);


candidateCtrls.controller('candidatesCtrl',[
'$scope', '$route',
function($scope, $route){
	$scope.title = "candidatesCtrl"
}])

.controller('candidateListCtr', ['$scope', 'candidateListService', '$route',
  function($scope, candidateListService, $route) {
	
	$scope.title = "ABCD";
	$scope.route = $route;

	$scope.getCandidateList = function(){
		console.log('getCandidateList()');
		$scope.candidates = candidateListService.getCandidateList();
      };

}]);