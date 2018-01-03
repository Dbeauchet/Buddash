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
		}else{
			$(".menuCta").animate({"left": "-1000"});
			$(".contenair1").animate({"width":"10%"});
			$(".bouddha").animate({"margin-top":"41vh"});;
			$(".invisible").removeClass("hidde");
			$(".bouddha").attr("src","img/bouddha.png");	
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
		fermeAddSite()
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





	// AJOUTER UNE DIV  AU BANDEAU

$(document).on('click','.suppr', function(){
		var idToDel = $(this).parent().attr('id');
		console.log(idToDel);
		$("#"+idToDel).remove();
		
	});

	// Récupération de l'id de la ligne de l'élément cliqué
	var ligne = "";

	$(".general").click(function(a){
 		console.log(a.target.id);
 		if(a.target.id.indexOf("ligne-") != -1){
 		console.log(a.target.id); 	
 		ligne = a.target.id;
 		console.log(a.target.id);
 		}
 		console.log(a.target.id);
 		ligne = a.target.id;
 	});



	

	// variables création id unique
	var last, diff;

   $('#ajouter').on('click',function(event){
   		var url = $("#urlSite").text();
   		$(".lien").attr("href",url);
   		console.log(url);
   		//création d'un id unique pour chaque nouveau site
  		if ( last ) {
	    	diff = event.timeStamp - last;
  			}
  		last = parseInt(event.timeStamp, 10);
		console.log("id-unique =" + last);
        console.log(ligne);
        if(ligne == "bas"){
        	var nom = $("#nomSite").val();
            $('#'+ligne).before('<div class="newDivBas" id="'+last+'"><a class="lien" href=""><div class="imgSiteBas" id="timestampBas"></div><span class="titreSiteBas" id="timestamp2Bas">'+nom+'</span "></a></div>');
            $('#'+ last).append('<div class="suppr"></div>');
			$('#'+ last).append('<div class="modif"></div>');
            var imglogo = $('#logo').attr("src");
            console.log(imglogo);
            $("#"+last).css('background-image','url('+imglogo+')');
            console.log(nom);
            $("#"+last .titreSite).text(nom);    
        }else{
        	 var nom = $("#nomSite").val();
            console.log(ligne);
            $('#'+ligne).before('<div class="newDiv" id="'+last+'"><a class="lien" href=""><div class="imgSite" id="timestamp"></div><span class="titreSite">'+nom+'</span></a></div>');
            $('#'+ last).append('<div class="suppr"></div>');
			$('#'+ last).append('<div class="modif"></div>');            
            var imglogo = $('#logo').attr("src");
            console.log(imglogo);
            $("#"+last).css('background-image','url('+imglogo+')');
            console.log(nom);
            $("#"+last .titreSite).text(nom);
        }
    });
  // Selectionner l'image du log par url
   	

   	$('#urlSiteBis').keyup(function(e) {    
   		if(e.keyCode == 13) { // KeyCode de la touche entrée
   			var urlBis= $("#urlSiteBis").val();
   			console.log(urlBis);
         	$('#logo').attr('src',urlBis);
          	$("#urlSiteBis").animate({"left":"5"});
          	console.log(urlBis);
 		}
 		console.log(urlBis);
	});


   	//recuperer l'url du site pour faire un lien sur autre page


   	 function recupUrl(){
   		var url = $("#urlSite").val();
   		console.log(url);
   	 	$(".lien").attr("href",url);
   	 	$(".lien").attr('target', '_blank');
   		console.log(url);
   	 }






   	 //Bouton ADD COLLECTION ferme et remet à l'état initial
	$('#ajouter').on("click",function(){
		fermeAddSite();
		recupUrl();
		$("#urlSite").val("");
	});



function fermeAddSite(){
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
 }










	//localstorage du tableau

	// var data={ 
 //               nom: nom,
 //               logo: url_1,
 //               url:url_2;
 //            };
 //    var key=indice;

	// var val = JSON.stringify(data);
	// window.localStorage.setItem(key, val);

	// value = JSON.parse(window.localStorage.getItem(key));













	// modifier

	$(".modif").on("click",function(){
		$(".addSite").animate({"top":"-45","left":"5"});
		$(".choixLogos").animate({"top":"-45","left":"5"});
		$(".general").animate({"margin-top":"100","margin-left":"100"});
		$("#urlSiteBis").animate({"top":"67","left":"5"});
		$(".invisible").toggleClass("hidde");
	})


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
     	}		
	})
	// Affichage sur la ligne BAS de modif et suppr
	$('#ligne-bas .pblbas').on('click',function(){
    	$("#ligne-bas .pblbas").toggleClass("opensuppr");
    	  if($("#ligne-bas .pblbas").hasClass("opensuppr")){
	        $("#ligne-bas .suppr").addClass('show');
	        $("#ligne-bas .modif").removeClass('show');
	        $("#ligne-bas .penbas").removeClass('openmodif');
     	}else{
	        $("#ligne-bas .suppr").removeClass('show');
     	}		
	})

	$('#ligne-bas .penbas').on('click',function(){
    	$("#ligne-bas .penbas").toggleClass("openmodif");
    	  if($("#ligne-bas .penbas").hasClass("openmodif")){
	        $("#ligne-bas .suppr").removeClass('show');
	        $("#ligne-bas .pblbas").removeClass('opensuppr');
	        $("#ligne-bas .modif").addClass('show');
     	}else{
	        $("#ligne-bas .modif").removeClass('show');
     	}	
	})










});

		

