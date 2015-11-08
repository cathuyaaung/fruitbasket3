/* Party Controllers Controllers */
  
var partyCtrls = angular.module('partyCtrls', []);



partyCtrls.controller('partiesCtrl',[
'$scope',
function($scope){
	$scope.title = "partiesCtrl"
}]);

partyCtrls.controller('partyListCtr', ['$scope', 'partyListService',
  function($scope, partyListService) {
	
	$scope.getPartyList = function(){
		console.log('getPartyList()');
		$scope.partyList = partyListService.getPartyList();
      };

	}]);