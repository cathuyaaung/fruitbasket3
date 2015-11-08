/* FAQ Services */  
  var faqServices = angular.module('faqServices', ['ngResource']);

faqServices.factory('faqListService', ['$resource',
  function($resource){ 
	return $resource(
		'http://api.maepaysoh.org/faq/list?token=:token', {}, {
		getFaqList: {method: 'GET', params:{token:'170728a2-f678-5331-b4db-722050b19e77'}}
		}
	);
  }]);