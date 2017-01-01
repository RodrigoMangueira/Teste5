angular.module("starter").factory("FileUtil",function($cordovaFile){
 
var util ={};

util.fileNames = [];
util.images = [];

function getNewName(){
	alert("new name?");
		var today = new Date();
	alert(today);
		return today.getHours().toString() + today.getMinutes().toString() + today.getSeconds().toString() + ".jpg"; //

};

function saveFileNames(fileNames){
	alert("save file name ok");
		var lista = angular.toJson(fileNames);
		localStorage.setItem("fileNames", lista);
	alert(lista);
};


function loadFileNames(){
	alert("Carregando nomes?");
		var lista = localStorage.getItem("fileNames");
	alert("Carregando nomes ok!");
		return angular.fromJson(lista) || [];
};


function openImage(name, success){
	alert("Carregando imagens...");
	alert(name);	
		$cordovaFile.readAsDataUrl(cordovaFile.file.externalApplicationStorageDirectory, name).them
		( function(result){
	alert("imagem Carregada!");			
			success(result);

},

	function(err){
	alert("erro... não foi possivel carregar a imagem.");

		}
		)
};

util.load = function(){
	alert("Carregar...");
		util.fileNames = loadFileNames();
		for (var i = 0; i < util.fileNames.length; i++) {
	alert("imagem push?");
		openImage(util.fileNames[i], function(dataUrl){
	alert("imagem push!");			
			util.images.push(dataUrl);

		})
	}

};


util.Save = function(dataUrl){
	var name = getNewName();
	alert("new name ok");

    $cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, name, dataUrl, true)
      .then(function (result) {
    alert ("salvou?");
        util.images.push(dataUrl);
    alert ("salvou???");       
        util.fileNames.push(name);
    alert ("salvou!");
    	saveFileNames(util.fileNames);
     alert (name);
      }, 

      function (err) {
    alert ("Erro ao salvar, tente novamente.");

      })};


return util;

})
