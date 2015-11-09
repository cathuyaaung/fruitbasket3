/* Candidate Controllers */
  
var candidateCtrls = angular.module('candidateCtrls', []);


candidateCtrls.controller('candidateListCtr', 
['$scope', '$route', 'stateListService', 'districtListService', 'townshipListService',
'getCandidateService', 'guyFactory',
function($scope, $route, stateListService, districtListService, townshipListService,
getCandidateService, guyFactory) {
	
	$scope.selectedStateName = "-- States --";
	$scope.selectedStateCode = "";
	$scope.selectedDistrictName = "-- Districts --";
	$scope.selectedDistrictCode = "";
	$scope.selectedTownshipName = "-- Township --";
	$scope.selectedTownshipCode = "";

	$scope.states = stateListService.query();
	$scope.districts = [];
	$scope.townships = [];
	$scope.candidates = [];

	$scope.selectState = function(state){
		$scope.selectedStateName = state.State_Region_Mya_MM3;
		$scope.selectedStateCode = state.SR_Pcode;
		$scope.districts = districtListService.query({SR_PCODE:state.SR_Pcode});

		$scope.selectedDistrictName = "-- Districts --";
		$scope.selectedDistrictCode = "";

		$scope.townships = [];
		$scope.selectedTownshipName = "-- Townships --";
		$scope.selectedTownshipCode = "";

		$scope.upperCandidates = [];		
		$scope.lowerCandidates = [];	
		$scope.stateCandidates = [];	
	};

	$scope.selectDistrict = function(district){
		$scope.selectedDistrictName = district.District_Mya_MM3;
		$scope.selectedDistrictCode = district.D_Pcode;
		$scope.townships = townshipListService.query({D_PCODE:district.D_Pcode});
		$scope.selectedTownshipName = "-- Townships --";
		$scope.selectedTownshipCode = "";

		$scope.upperCandidates = [];		
	};

	$scope.selectTownship = function(township){
		$scope.selectedTownshipName = township.Township_Mya_MM3;
		$scope.selectedTownshipCode = township.TS_Pcode;

		// guyFactory.getGuys().success(function(data){
		// 	console.log(data);
		// }).error(function(err){
		// 	console.log(err);
		// });

		// $scope.upperCandidates = getCandidateService.query(
		// 	{
		// 		st:$scope.selectedStateCode, 
		// 		dt:$scope.selectedDistrictCode, 
		// 		ts:$scope.selectedTownshipCode,
		// 		house: 'အမျိုးသားလွှတ်တော်'
		// 	});

		// $scope.lowerCandidates = getCandidateService.query(
		// 	{
		// 		st:$scope.selectedStateCode, 
		// 		dt:$scope.selectedDistrictCode, 
		// 		ts:$scope.selectedTownshipCode,
		// 		house: 'lower_house'
		// 	});		

		// $scope.stateCandidates = getCandidateService.query(
		// 	{
		// 		st:$scope.selectedStateCode, 
		// 		dt:$scope.selectedDistrictCode, 
		// 		ts:$scope.selectedTownshipCode,
		// 		house: 'state_region'
		// 	});		
	};

	$scope.getUpperGuys = function(){
		// if($scope.selectedStateCode === '' ||
		// 	$scope.selectedDistrictCode === '' ||
		// 	$scope.selectedTownshipCode === ''){
		// 	return;
		// }
		$scope.upperCandidates = getCandidateService.query(
			{
				st:$scope.selectedStateCode, 
				dt:$scope.selectedDistrictCode, 
				ts:$scope.selectedTownshipCode,
				house: 'အမျိုးသားလွှတ်တော်'
			});		
	};
	$scope.getLowerGuys = function(){
		// if($scope.selectedStateCode === '' ||
		// 	$scope.selectedDistrictCode === '' ||
		// 	$scope.selectedTownshipCode === ''){
		// 	return;
		// }		
		$scope.lowerCandidates = getCandidateService.query(
			{
				st:$scope.selectedStateCode, 
				dt:$scope.selectedDistrictCode, 
				ts:$scope.selectedTownshipCode,
				house: 'lower_house'
			});				
	};
	$scope.getStateGuys = function(){
		// if($scope.selectedStateCode === '' ||
		// 	$scope.selectedDistrictCode === '' ||
		// 	$scope.selectedTownshipCode === ''){
		// 	return;
		// }		
		$scope.stateCandidates = getCandidateService.query(
			{
				st:$scope.selectedStateCode, 
				dt:$scope.selectedDistrictCode, 
				ts:$scope.selectedTownshipCode,
				house: 'state_region'
			});			
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