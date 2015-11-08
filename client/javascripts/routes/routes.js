app.config([
'$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){

	$routeProvider
	.when('/', {
		templateUrl: '/partials/main.html',
		controller: 'mainCtrl',
		activetab: 'main'
	})
	.when('/candidates', {
		templateUrl: '/partials/candidates.html',
		controller: 'candidateListCtr',
		activetab: 'candidates'		
	})
	.when('/parties', {
		templateUrl: '/partials/parties.html',
		controller: 'partiesCtrl',
		activetab: 'parties'		
	})
	.when('/faq', {
		templateUrl: '/partials/faq.html',
		controller: 'faqCtrl',
		activetab: 'faq'		
	})
	;


}]);