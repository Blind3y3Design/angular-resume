/* use strict */
var app = angular.module("ResumeApp", []);

app.service("resumeService", function($http, $q) {
	var deferred = $q.defer();
	$http.get('resources/json/resume-data.json').then(function(data) {
		deferred.resolve(data);
	});

	this.getResume = function() {
		return deferred.promise;
	}
})

.controller("resumeCtrl", function($scope, resumeService) {
	var promise = resumeService.getResume();
	promise.then( function(data) {
		$scope.resume = data.data;
		console.log($scope.resume);
	});
})

.filter('unsafe', function($sce) {
	return $sce.trustAsHtml;
})