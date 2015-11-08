/* Candidate Services */  
  var candidateServices = angular.module('candidateServices', ['ngResource']);

candidateServices.factory('candidateListService', ['$resource',
  function($resource){ 
	return $resource(
		'http://api.maepaysoh.org/candidate/list?token=:token&_with=party&per_page=:page&party=:party', {}, {
		getCandidateList: {method: 'GET', params:{token:'170728a2-f678-5331-b4db-722050b19e77', page:20, party:60}}
		}
	);
  }]);


candidateServices.factory('stateListService', ['$resource',
  function($resource){ 
	return $resource(
		'http://localhost:3000/states', {}, {
		getStateList: {method: 'GET', params:{}, isArray:true}
		}
	);
  }]);