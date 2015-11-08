/* Candidate Controllers */
  
var candidateCtrls = angular.module('candidateCtrls', ['candidateServices']);


candidateCtrls.controller('candidateListCtr', ['$scope', '$route', 'stateListService',
  function($scope, $route, stateListService) {
	

	$scope.selectedStateName = "States";

	//console.log(stateListService.getStateList().data);
	// console.log(stateListService.get({}, function(){
	// 	console.log('here');
	// }));

	$scope.states = stateListService.get();

	$scope.selectState = function(state){
		$scope.selectedStateName = state.name;
	};


	// $scope.getCandidateList = function(){
	// 	console.log('getCandidateList()');
	// 	$scope.candidates = candidateListService.getCandidateList();
 //      };

}]);