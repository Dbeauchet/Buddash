$(document).ready(function(){

	// sauver les Id et Secret
	var valeurId="";
	var valeurSecret="";
       
    $("#save").click(function(){
        var valeurId = $("#appId").val();
    	console.log(valeurId);

    	var valeurSecret = $("#appSecret").val();
    	console.log(valeurSecret);

	    localStorage.setItem("valeurId", valeurId);
	    localStorage.setItem("valeurSecret", valeurSecret);
    });

//// Création du tableau de logos à rendre invisible Add a Site ////////////////////
	
	$("#nomSite").focusout(ajouterPicture)
	function ajouterPicture(){
		var query = $("#nomSite").val();
		console.log('query='+ query);
		localStorage.setItem("nomSite", query);
		$("#moreImages").addClass("opacity1");
		$("#setUrl").addClass("opacity1");
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
				$('.choixLogos').append('<img id="page-'+i+'" src="https://graph.facebook.com/'+pageid+'/picture/?width=200">');
			}
			// création du logo central qui doit apparaitre en quittant le focus sur champ nom
			var pageid = monJSON.data[0].id;
			console.log(monJSON.data[0]);
			$('#logo').attr('src',"https://graph.facebook.com/"+pageid+"/picture/?width=80");
		});
	}

	//choix logo ds add a site

	$(".choixLogos").click(function(a){
 		if(a.target.id.indexOf("page-") != -1){
 		console.log(a.target.id); 	
 		var urlPict=a.target.src;
 		console.log(a.target.src);
		$('#logo').attr('src',urlPict).css("width","80");
 		}
 	});

	// ouvrir le menu principal avec bouddha
	$(".bouddha").on("click",function(){
		$(".bouddha").toggleClass("open");
		if ($(".bouddha").hasClass("open") == true){
			$(".contenair1").animate({"width":"19%"});
			$(".bouddha").animate({"margin-top":"10vh"});
 			$(".menuCta").animate({"left": "72"},);
 			$(".invisible").toggleClass("hidde");
		}else{
			$(".menuCta").animate({"left": "-1000"});
			$(".contenair1").animate({"width":"10%"});
			$(".bouddha").animate({"margin-top":"41vh"});
			$(".invisible").removeClass("hidde");
			
		}
	});


	//ouvrir add a site
	$(".ajout").on("click",function(){
		$(".addSite").animate({"top":"-45","left":"5"});
		$(".choixLogos").animate({"top":"-45","left":"5"});
		$(".general").animate({"margin-top":"100","margin-left":"100"});
		$("#urlSiteBis").animate({"top":"67","left":"5"});
		$(".invisible").toggleClass("hidde");
	});

	//fermer add a site avec la croix
	$(".cross").on("click",function(){
		if($(".cross").hasClass("openchoixlogo")){
			$(".choixLogos").animate({"left":"5"});
			$("#urlSiteBis").animate({"left":"5"});
     		$("#moreImages").text("More images");
	 		$(".addSite").animate({"top":"-1000","left":"-1000"});
	 		$(".choixLogos").animate({"top":"-1000","left":"-1000"});
	 		$("#urlSiteBis").animate({"top":"-1000","left":"-1000"});
	 		$(".general").animate({"margin-top":"0","margin-left":"0"});
	 		$(".invisible").removeClass("hidde");
	 		$("#setUrl").removeClass("openUrl");
	 		$('#logo').attr("src","");
	 		$('.choixLogos img').attr("src","");
	 		$("#moreImages").removeClass("opacity1");
			$("#setUrl").removeClass("opacity1");
	 	}else{
	 		$(".addSite").animate({"top":"-1000","left":"-1000"});
	 		$(".choixLogos").animate({"top":"-1000","left":"-1000"});
	 		$("#urlSiteBis").animate({"top":"-1000","left":"-1000"});
	 		$(".general").animate({"margin-top":"0","margin-left":"0"});
	 		$(".invisible").removeClass("hidde");
	 		$("#setUrl").removeClass("openUrl");
	 		$("#nomSite").val("");
	 		$('#logo').attr("src","");
	 		$('.choixLogos img').attr("src","");
	 		$("#moreImages").removeClass("opacity1");
			$("#setUrl").removeClass("opacity1");

	 	}
	});






	//ouvrir fermer choix logo
     $("#moreImages").on("click",function(){
     	$("#moreImages").toggleClass("openchoixlogo");
     	if($("#moreImages").hasClass("openchoixlogo")){
     		$(".choixLogos").animate({"left":"305"});
     		$("#moreImages").text("less images");
     	}else{
     		$(".choixLogos").animate({"left":"5"});
     		$("#moreImages").text("More images");
     	}
     });
     //ouvrir fermer set url
    $("#setUrl").on("click",function(){
     	$("#setUrl").toggleClass("openUrl");
     	if($("#setUrl").hasClass("openUrl")){
     		$("#moreImages").removeClass("openchoixlogo");
     		$(".choixLogos").animate({"left":"5"});
     		$("#moreImages").text("More images");
     		$("#urlSiteBis").animate({"left":"315"});
     	}else{
     		$("#urlSiteBis").animate({"left":"5"});
     		
     	}
    });











});

		

