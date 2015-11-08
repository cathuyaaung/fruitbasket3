/* Candidate Controllers */
  
var candidateCtrls = angular.module('candidateCtrls', ['candidateServices']);


candidateCtrls.controller('candidateListCtr', ['$scope', 'candidateListService', '$route',
  function($scope, candidateListService, $route) {
	

	$scope.selectedStateName = "Please select state";
	$scope.states = [
		{
			name: 'State 1'
		},
		{
			name: 'State 2'
		},
		{
			name: 'State 3'
		},
		{
			name: 'State 4'
		},
		{
			name: 'State 5'
		},

	];
	$scope.selectState = function(state){
		$scope.selectedStateName = state.name;
	};


	$scope.getCandidateList = function(){
		console.log('getCandidateList()');
		$scope.candidates = candidateListService.getCandidateList();
      };

}]);