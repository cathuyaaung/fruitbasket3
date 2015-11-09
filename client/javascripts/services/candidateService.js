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

candidateServices.factory('getCandidateService', 
['$resource',
function($resource){ 
	return $resource('http://api.maepaysoh.org/candidate/list?token=:token&_with=party&constituency_st_pcode=:st&constituency_dt_pcode=:dt&constituency_ts_pcode=:ts&per_page=200&legislature=:house', {}, {
		query: {
			method: 'GET', 
			params:{
				token:'3cfd10b9-f445-5686-8bbd-256e73dadffe',
				st: 'st',
				dt: 'dt',
				ts: 'ts',
				house: 'house'
			}
		}
	});
}]);







