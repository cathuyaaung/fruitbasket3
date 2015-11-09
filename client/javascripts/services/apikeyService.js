var apiKeyServices = angular.module('apiKeyServices', []);

apiKeyServices.service('apiKeyService', 
['superCache',
function(superCache){


  var data = '';
  var cachedData = superCache.get('super-cache');
  if (cachedData) { // If there’s something in the cache, use it!
    data = cachedData;
  }
  else { // Otherwise, let’s generate a new instance
    superCache.put('super-cache', 'This is cached data!');
    data = superCache.get('super-cache');
  }

  console.log('data: '+ data);


}]); 


apiKeyServices.factory('superCache',
['$cacheFactory',
function($cacheFactory){
  return $cacheFactory('super-cache');
}]);