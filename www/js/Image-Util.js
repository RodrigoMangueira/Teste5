angular.module("starter").factory("ImageUtil", function($cordovaCamera){
  var util ={};

  util.cameraOptions ={

    CAMERA:  1,
    GALLERY: 2
    }


  util.getImage = function(option, success, error){
      var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: option,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 330,
      targetHeight: 330,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: true,
      correctOrientation: false
    };                      


    $cordovaCamera.getPicture(options).then(
      function(imageData) {
          success(imageData);
     // var image = document.getElementById('myImage');
     //image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      error(err);
    });

  };

util.filterImage = function(imgId, option){

  /*Caman("#" + imgId, function () {
  this.resize({
    width: 300,
    height: 500
  });

  // You still have to call render!
  this.render();
  //this.reset();
  });*/

 Caman("#" + imgId, function(){


    switch(option){
      case 1:
        this.sinCity();
      break;

      case 2:
        this.vintage();

      break;


      case 3:
        this.pinhole();
      break;

      case 4:
        this.reset();
      break;
    }
    
        this.render();

});
}
  return util;
  })
