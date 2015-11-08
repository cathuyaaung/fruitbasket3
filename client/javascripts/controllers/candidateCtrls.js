/* Candidate Controllers */
  
var candidateCtrls = angular.module('candidateCtrls', ['candidateServices']);


candidateCtrls.controller('candidatesCtrl',[
'$scope',
function($scope){
	$scope.title = "candidatesCtrl"
}])

.controller('candidateListCtr', ['$scope', 'candidateListService',
  function($scope, candidateListService) {
	
	$scope.title = "ABCD";

	$scope.getCandidateList = function(){
		console.log('getCandidateList()');
		$scope.candidates = candidateListService.getCandidateList();
      };

}]);