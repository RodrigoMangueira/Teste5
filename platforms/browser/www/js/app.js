// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom'); //upper
})

.directive("filterBar", function() {
  return{
    restrict: "E", 
    templateUrl: "lib/filter-bar.html"
    }
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


 //.controller("HomeController", function($scope){

  //$scope.onClick = function(){

 // alert("onClick");


//////////////////////////////////////////////Home////////////////////////////////////

.controller('HomeController', function($scope, FileUtil) {
  //document.addEventListener("deviceready", function () {
  $scope.onTabSelect = function(){  
    ionic.Platform.ready(function(){
        FileUtil.load();
          $scope.images = FileUtil.images;
          });
    }
        })


//////////////////////////////////////////////Camera//////////////////////////////////

.controller("CameraController", function($scope, ImageUtil, FileUtil) {
  $scope.onTabSelect = function(){
    $scope.imageCamera = undefined;

  ImageUtil.getImage(ImageUtil.cameraOptions.CAMERA, function(imageData){
       alert("salvou no arquivo");
         $scope.imageCamera = "data:image/jpeg;base64," + imageData;
              },

             function(err){
            alert("erro na camera", + err);
         }
      );
        }

$scope.onSave = function(){
  alert("ok");
    var canvas = document.getElementById("imageCamera");
    var dataUrl = canvas.toDataURL();
    FileUtil.save(dataUrl);

}
$scope.onFilter = function(option){
  alert(option);
  ImageUtil.filterImage("imageCamera", option);

}

})

//////////////////////////////////////////////Galeria//////////////////////////////////

.controller('GalleryController', function($scope, ImageUtil, FileUtil){

    $scope.onTabSelect = function(){
      $scope.imageGallery = undefined;
        ImageUtil.getImage(ImageUtil.cameraOptions.GALLERY, function(imageData){
        $scope.imageGallery = "data:image/jpeg;base64," + imageData;
        },
      function(err){
          console.log(err);
        }
    );
  }

  $scope.onSave = function(){
  //alert("ok");
    var canvas = document.getElementById("imageGallery");
    var dataUrl = canvas.toDataURL();
    FileUtil.save(dataUrl);

}

  $scope.onFilter = function(option){
  ImageUtil.filterImage("imageGallery", option);
}

})
