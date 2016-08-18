var app = angular.module('myApp', []);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){
	
	$scope.myImages = [
		{url: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28608', description: 'bootstrap logo'},
		{url: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28608', description: 'bootstrap logo'},
		{url: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28608', description: 'bootstrap logo'},
		{url: 'https://assets.servedby-buysellads.com/p/manage/asset/id/28608', description: 'bootstrap logo'}
	]

	$scope.getInfo = function(){
		var info = { url: $scope.url , description: $scope.description }
		$scope.url = "";
		$scope.description = "";

		$http.post('/getImage', info).success(function(data){
			$scope.myImages.unshift(data);
		})
	}

	$http.get('/returnImage').success(function(data){
		angular.copy(data, $scope.myImages);
	});

	// function getImages(){
	// 	$http.get()
	// }

}]);