'use strict';

var app = angular.module('demo', []);



app.controller('albums', function($scope, $http) {
    $http.get('https://06f9c734.ngrok.io/api/v1/albums').
        then(function(response) {
             $scope.albums = response.data;


             $scope.entity = {};



			$scope.delete = function(index){
			   $scope.albums.splice(index,1);
			 }

			 $scope.remove = function(item) { 
  var index = $scope.albums.indexOf(item);
  $scope.albums.splice(index, 1);     
}

	 	// $scope.save = function(index){
	  // $scope.albums[index].editable = false;
	   
	// }

	  $scope.add = function(){
	  	var newAlbum = {
	  		"id":$scope.id,
	  		"userId":$scope.userId,
	  		"title":$scope.title
	  	}
	  $scope.albums.push(newAlbum);};

	  	
	  	$scope.id = null;
		$scope.userId = null;
		$scope.title = null;
$scope.postdata = function (id, userId, title) {
var data = {
"id":$scope.id,
	  		"userId":$scope.userId,
	  		"title":$scope.title
};
//Call the services
$http.post('https://06f9c734.ngrok.io/api/v1/albums', data).then(function (response) {
if (response.data)
$scope.msg = "Post Data Submitted Successfully!";
}, function (response) {
$scope.msg = "Service not Exists";
$scope.statusval = response.status;
$scope.statustext = response.statusText;
$scope.headers = response.headers();
});
};
$scope.id = null;
		$scope.userId = null;
		$scope.title = null;
$scope.deletedata = function (id) {
var data = {
"id":$scope.id
};
//Call the service to delete data
$http.delete('https://06f9c734.ngrok.io/api/v1/albums/'+id).then(function (response) {
if (response.data)
$scope.msg = "Data Deleted Successfully!";
console.log("YAS");
}, function (response) {
$scope.msg = "Service not Exists";
$scope.statusval = response.status;
$scope.statustext = response.statusText;
$scope.headers = response.headers();
});
};







	  
	 

        });



}
);

//$http.post('http://innovatec.optimacommerce.com/api/v1/albums', data).then(function (response) {
//





