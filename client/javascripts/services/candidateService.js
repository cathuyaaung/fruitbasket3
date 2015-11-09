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

candidateServices.factory('stateListService', 
['$resource',
function($resource){ 
	return $resource('http://localhost:3000/states', {}, {
		query: {method: 'GET', params:{}, isArray:true}
	});
}]);

candidateServices.factory('districtListService', 
['$resource',
function($resource){ 
	return $resource('http://localhost:3000/districts?sr_pcode=:SR_PCODE', {}, {
		query: {method: 'GET', params:{SR_PCODE:'SR_PCODE'}, isArray:true}
	});
}]);

candidateServices.factory('districtListService', 
['$resource',
function($resource){ 
	return $resource('http://localhost:3000/districts?sr_pcode=:SR_PCODE', {}, {
		query: {method: 'GET', params:{SR_PCODE:'SR_PCODE'}, isArray:true}
	});
}]);

candidateServices.factory('townshipListService', 
['$resource',
function($resource){ 
	return $resource('http://localhost:3000/townships?d_pcode=:D_PCODE', {}, {
		query: {method: 'GET', params:{D_PCODE:'D_PCODE'}, isArray:true}
	});
}]);

candidateServices.factory('guyFactory', 
['$http',
function($http){ 
	var guyFactory = {};

	guyFactory.getGuys = function(){
		return $http.get('http://api.maepaysoh.org/candidate/list?token=b97e8029-dfb2-557d-bfc5-c3a557f4386d&_with=party&constituency_st_pcode=MMR002&constituency_dt_pcode=MMR002D001&constituency_ts_pcode=MMR002001&per_page=200&legislature=state_region');
	}

	return guyFactory;
}]);

candidateServices.factory('getCandidateService', 
['$resource',
function($resource){ 
	return $resource('http://api.maepaysoh.org/candidate/list?token=:token&_with=party&constituency_st_pcode=:st&constituency_dt_pcode=:dt&constituency_ts_pcode=:ts&per_page=200&legislature=:house', {}, {
		query: {
			method: 'GET', 
			params:{
				token:'b97e8029-dfb2-557d-bfc5-c3a557f4386d',
				st: 'st',
				dt: 'dt',
				ts: 'ts',
				house: 'house'
			}
		}
	});
}]);
