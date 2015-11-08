/* Candidate Controllers */
  
var candidateCtrls = angular.module('candidateCtrls', []);


candidateCtrls.controller('candidatesCtrl',[
'$scope',
function($scope){
	$scope.title = "candidatesCtrl"
}])

.controller('candidateListCtr', ['$scope', 'candidateListService',
  function($scope, candidateListService) {
	
	$scope.getCandidateList = function(){
		console.log('getCandidateList()');
		$scope.candidates = candidateListService.getCandidateList();
      };

}]);