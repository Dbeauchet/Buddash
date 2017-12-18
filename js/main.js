//ordre, date de dernière consultation


/// Afficher site AD | EDIT
function ajoutmodifsite(action,nom,url,image,list){
	
};
/// Action sur le Add to Collection
function ajoutsite(nom,url,image,list){
	
};

///// Lightbox ////////////////////////
/*function OpenLightBox{
 	$('#plusSite').click(function(){
		$('#LighBox').css( 'display','inline-block');
 	};
}
function CloseLightBox{
	$('#croix').click(function(){
		$('#LighBox').css( 'display','none');
 	};
}

///// Memu API ////////////////////////
function OpenApi{
 	$('#tete').click(function(){
		$('#ApiMenu').css( 'display','inline-block');
 	};
}
function CloseApi{
	$('#tete').click(function(){
		$('#ApiMenu').css( 'display','none');
 	};
}


//// Action enregistrement Facebook API query, AppId, AppSecret à stoker dans le LOCAL STORAGE
var AppId='437660773298889';
var AppSecret='371758459896094a60e6c3b878aa947a';
	function save(){
		
	};

*/
//// Création du tableau de logos à rendre invisible  ////////////////////

function getPictures(query, AppId, AppSecret){
var query="lemonde";
var AppId='437660773298889';
var AppSecret='371758459896094a60e6c3b878aa947a';
	// remplacer lemonde par '+query+''
	$.getJSON('https://graph.facebook.com/search?q='+query+'&type=page&access_token='+AppId+'|'+AppSecret+'',function(monJSON){
		var length = monJSON.data.length;
		console.log(monJSON.data);
		for(var i=0;i<length;i++){
			var pageid = monJSON.data[i].id;
			$('body').append('<img src="https://graph.facebook.com/'+pageid+'/picture/?width=30">');
		}
		// création du logo central qui doit apparaitre en quittant le focus sur champ nom
		var pageid = monJSON.data[0].id;
		console.log(monJSON.data[0]);
		$('#logo').attr('src',"https://graph.facebook.com/"+pageid+"/picture/?width=30");
	});
}

//// Déclenche la création du tableau de logos ///////////
getPictures();

//// Action More Images : rendre le tableau de logo visible avec glissement ///////////
function moreImages(){
 	$('#btn').click(function(){
 		$('#divMoreImages').css( 'display','inline-block');
 	});
}

//// Action set URL : enregistre l'URL  ////////////////////////////
function setLogo(){
 	$('#btnSet').click(function(){
 		$('#setImages').css( 'display','inline-block');
 	});
}

//// Action themes
	function couleur(){
       // changer l'appel src du css dans le header
	};





