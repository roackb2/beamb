(function(){
	var app = angular.module('app', []);

	app.controller("PostController", function($scope, $http) {
		$scope.posts = [];		

		$http.get("./api/posts").success(function(posts) {
			$scope.posts = posts;
		}).error(function(err, status, headers, config) {
			console.log(err);
		})
	});	
})();
