angular.module("starter").factory("ImageUtil", function($cordovaCamera){
  var util ={};

  util.cameraOptions ={

    CAMERA:  1,
    GALLERY: 2
    }


  util.getImage = function(option, success, error){
      var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: option,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };



    $cordovaCamera.getPicture(options).then(
      function(imageData) {
          success(imageData);
      //var image = document.getElementById('myImage');
     // image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      error(err);
    });

  };

util.filterImage = function(imgId, option){

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
