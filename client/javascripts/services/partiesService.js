/* Party Services */  
  var partyServices = angular.module('partyServices', ['ngResource']);

partyServices.factory('partyListService', ['$resource',
  function($resource){ 
	return $resource(
		'http://api.maepaysoh.org/party?token=:token', {}, {
		getPartyList: {method: 'GET', params:{token:'170728a2-f678-5331-b4db-722050b19e77'}}
		}
	);
  }]);
