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
//recuperer App ID et App Secret

var valeurId="";
var valeurSecret="";
       
    $("#save").click(function(){
        var valeurId = $("#appId").val();
    	console.log(valeurId);

    	var valeurSecret = $("#appSecret").val();
    	console.log(valeurSecret);

	    localStorage.setItem("valeurId", valeurId);
	    localStorage.setItem("valeurSecret", valeurSecret);
	    //console.log(valeurId +", "+ valeurSecret);
	    //getPictures();
    });

//// Création du tableau de logos à rendre invisible Add a Site ////////////////////
	
/*	$("#ajouter").click( function(){
		var url = $("#urlSite").val();
		localStorage.setItem("urlSite", url);
	});
*/



	$("#nomSite").focusout(ajouterPicture)
	function ajouterPicture(){
		var query = $("#nomSite").val();
		console.log('query='+ query);
		localStorage.setItem("nomSite", query);
		getPictures();
	}



function getPictures(query, AppId, AppSecret){
	 query=localStorage.getItem('nomSite');
	//var AppId='437660773298889';
	AppId=localStorage.getItem('valeurId');
	console.log(valeurId);
	//var AppSecret='371758459896094a60e6c3b878aa947a';// 
	AppSecret = localStorage.getItem('valeurSecret');
	// remplacer lemonde par '+query+''
	$.getJSON('https://graph.facebook.com/search?q='+query+'&type=page&access_token='+AppId+'|'+AppSecret+'',function(monJSON){
		var length = monJSON.data.length;
		console.log(monJSON.data);
		for(var i=0;i<15;i++){
			var pageid = monJSON.data[i].id;
			$('.choixLogos').append('<img id="page-'+i+'" src="https://graph.facebook.com/'+pageid+'/picture/?width=50">');
		}
		// création du logo central qui doit apparaitre en quittant le focus sur champ nom
		var pageid = monJSON.data[0].id;
		console.log(monJSON.data[0]);
		$('#logo').attr('src',"https://graph.facebook.com/"+pageid+"/picture/?width=30");
	});
}

 $(".choixLogos").click(function(a){
 	if(a.target.id.indexOf("page-") != -1){
 	console.log(a.target.id); 	
 	var urlPict=a.target.src;
 	console.log(a.target.src);
	$('#logo').attr('src',urlPict);
 	}
 });

//// Déclenche la création du tableau de logos ///////////


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





