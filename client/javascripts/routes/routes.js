app.config([
'$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){

	$routeProvider
	.when('/', {
		templateUrl: '/partials/main.html',
		controller: 'mainCtrl'
	})
	.when('/candidates', {
		templateUrl: '/partials/candidates.html',
		controller: 'candidatesCtrl'		
	})
	.when('/parties', {
		templateUrl: '/partials/parties.html',
		controller: 'partiesCtrl'		
	})
	.when('/faq', {
		templateUrl: '/partials/faq.html',
		controller: 'faqCtrl'		
	})
	;


}]);