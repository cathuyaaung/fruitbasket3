/* Candidate Controllers */
  
var candidateCtrls = angular.module('candidateCtrls', []);


candidateCtrls.controller('candidateListCtr', ['$scope', '$route', 'stateListService',
  function($scope, $route, stateListService) {
	

	$scope.selectedStateName = "States";
	$scope.states = stateListService.getStateList();
	

	$scope.selectState = function(state){
		$scope.selectedStateName = state.State_Region_Mya_MM3;
	};

	$scope.getCandidateList = function(){
		console.log('getCandidateList()');
		$scope.candidates = candidateListService.getCandidateList();
      };
	  
	$scope.getStateList = function(){
		console.log('getStateList()');
		$scope.states = stateListService.getStateList();
      };
}]);