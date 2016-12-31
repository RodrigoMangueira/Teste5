angular.module("starter").factory("FileUtil",function($cordovaFile){
 
var util ={};

util.fileNames = [];

util.images = [];


function getNewName(){
	alert("new name?");
	var today = new Date();
		alert(today);
	return today.getHours().toString() + today.getMinutes().toString() + today.getSeconds().toString() + ".jpg";

}

function saveFileNames(fileNames){
	alert("save file name ok");
	var lista = angular.toJson(fileNames);
	localStorage.setItem("fileNames",lista);
	alert("lista");
};

function loadFileNames(){
	alert("Carregando nomes?");
	var lista = localStorage.getItem("fileNames");
		alert("Carregando nomes ok!");
	return angular.fromJson(lista) || [ ];
};

function openImage(name, success){
		alert("Carregando imagens...");
	$cordovaFile.readAsText(cordovaFile.file.externalApplicationStorageDirectory, name)
	.them( function(result){
			alert("imagem Carregada!", + result);
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
		openImage(util.fileNames[1], function(dataUrl){
			util.images.push(dataUrl);

		})
	}

};


util.Save = function(dataUrl){
	var name = getNewName();
	alert("new name ok");

    $cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, "teste.jpg", dataUrl, true)
      .then(function (result) {
        alert ("salvou?");

        util.images.push(dataUrl);
        util.fileNames.push(name);
        alert ("salvou!");
      }, function (err) {
               alert ("Erro ao salvar, tente novamente.");

      })};


return util;

})
