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

	function effacePictosmodifs(){
		$(".suppr").removeClass('show');
		$(".pbl").removeClass('opensuppr');
		$(".modif").removeClass('show');
		$(".pen").removeClass('openmodif');
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
		effacePictosmodifs();
		$(".bouddha").toggleClass("open");
		if ($(".bouddha").hasClass("open") == true){
			$(".contenair1").animate({"width":"19%"});
			$(".bouddha").animate({"margin-top":"10vh"});
 			$(".menuCta").animate({"left": "72"},);
 			$(".invisible").toggleClass("hidde");
 				$(".bouddha").attr("src","img/bouddha_white.png");
 				$(".bouddha").addClass('topBouddha');
		}else{
			$(".menuCta").animate({"left": "-1000"});
			$(".contenair1").animate({"width":"10%"});
			$(".bouddha").animate({"margin-top":"41vh"});;
			$(".invisible").removeClass("hidde");
				$(".bouddha").attr("src","img/bouddha.png");
				$(".bouddha").removeClass('topBouddha');
			
		}
	});


	//ouvrir add a site
	$(".ajout").on("click",function(){
		effacePictosmodifs();
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


	 //FERME et REMET LA PAGE A L'OUVERTURE de DEPART
	$('#ajouter').on("click",function(){
		$(".choixLogos").animate({"top":"-1000","left":"-1000"});
		$(".addSite").animate({"top":"-1000","left":"-1000"});
		$(".invisible").removeClass("hidde");
		$("#urlSiteBis").animate({"top":"-1000","left":"-1000"});
		$(".general").animate({"margin-top":"0","margin-left":"0"});
	});


	// AJOUTER UNE DIV  AU BANDEAU

	var asuppr = "";
	$(".contenair2").on('click',function(e){
 		//if(s.target.id.indexOf("site-") != -1){	
 		//}
 		asuppr = $(e).attr('id');
 		//asuppr = e.target.id;
 		console.log( 'a supprimer=' + asuppr)
 	});

	$(".newDiv").on('div','click',function(){ 
	    var test =$(event.target).attr(id);
	    console.log('test='+test);
	})

	// Récupération de l'id de la ligne de l'élément cliqué
	var ligne = "";

	$(".contenair2").click(function(a){
 		//if(a.target.id.indexOf("ligne-") != -1){	
 		//}
 		ligne = a.target.id;
 		console.log( 'ligne a traiter=' + ligne)
 	});




	// variables création id unique
	var last, diff;

	// 
	$('#ajouter').on('click',function(){
		//création d'un id unique pour chaque nouveau site
  		if ( last ) {
	    	diff = event.timeStamp - last;
  			}
  		last = "site-" + parseInt(event.timeStamp, 10);
		console.log("id-unique =" + last);

		// ajout de chaque site dans la ligne selectionnée, avec les 2 btn : suppression et modif en display none par défaut
		$('#'+ ligne).before('<div class="newDiv" id="'+last+'"><div class="imgSite"></div><span class="titreSite id="timestamp">'+last+'</span "></div>');
		$('#'+ last).append('<div class="suppr"></div>');
		$('#'+ last).append('<div class="modif"></div>');
	})

	// modifier



	// Affichage sur la ligne Day de modif et suppr
	$('#ligne-day .pbl').on('click',function(){
    	$("#ligne-day .pbl").toggleClass("opensuppr");
    	  if($("#ligne-day .pbl").hasClass("opensuppr")){
	        $("#ligne-day .suppr").addClass('show');
	        $("#ligne-day .modif").removeClass('show');
	        $("#ligne-day .pen").removeClass('openmodif');
     	}else{
	        $("#ligne-day .suppr").removeClass('show');
     	}		
	})

	$('#ligne-day .pen').on('click',function(){
    	$("#ligne-day .pen").toggleClass("openmodif");
    	  if($("#ligne-day .pen").hasClass("openmodif")){
	        $("#ligne-day .suppr").removeClass('show');
	        $("#ligne-day .pbl").removeClass('opensuppr');
	        $("#ligne-day .modif").addClass('show');
     	}else{
	        $("#ligne-day .modif").removeClass('show');
     	}		
	})


	// Affichage sur la ligne Week de modif et suppr
	$('#ligne-week .pbl').on('click',function(){
    	$("#ligne-week .pbl").toggleClass("opensuppr");
    	  if($("#ligne-week .pbl").hasClass("opensuppr")){
	        $("#ligne-week .suppr").addClass('show');
	        $("#ligne-week .modif").removeClass('show');
	        $("#ligne-week .pen").removeClass('openmodif');
     	}else{
	        $("#ligne-week .suppr").removeClass('show');
     	}		
	})

	$('#ligne-week .pen').on('click',function(){
    	$("#ligne-week .pen").toggleClass("openmodif");
    	  if($("#ligne-week .pen").hasClass("openmodif")){
	        $("#ligne-week .suppr").removeClass('show');
	        $("#ligne-week .pbl").removeClass('opensuppr');
	        $("#ligne-week .modif").addClass('show');
     	}else{
	        $("#ligne-week .modif").removeClass('show');
     	}		
	})

	// Affichage sur la ligne Month de modif et suppr
	$('#ligne-month .pbl').on('click',function(){
    	$("#ligne-month .pbl").toggleClass("opensuppr");
    	  if($("#ligne-month .pbl").hasClass("opensuppr")){
	        $("#ligne-month .suppr").addClass('show');
	        $("#ligne-month .modif").removeClass('show');
	        $("#ligne-month .pen").removeClass('openmodif');
     	}else{
	        $("#ligne-month .suppr").removeClass('show');
     	}		
	})

	$('#ligne-month .pen').on('click',function(){
    	$("#ligne-month .pen").toggleClass("openmodif");
    	  if($("#ligne-month .pen").hasClass("openmodif")){
	        $("#ligne-month .suppr").removeClass('show');
	        $("#ligne-month .pbl").removeClass('opensuppr');
	        $("#ligne-month .modif").addClass('show');
     	}else{
	        $("#ligne-month .modif").removeClass('show');
     	}		month
	})












});

		

