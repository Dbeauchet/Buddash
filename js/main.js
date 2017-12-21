$(document).ready(function(){




	// ouvrir le menu principal avec bouddha
	$(".bouddha").on("click",function(){
		$(".bouddha").toggleClass("open");
		if ($(".bouddha").hasClass("open") == true){
			$(".contenair1").animate({"width":"19%"});
			$(".bouddha").animate({"margin-top":"10vh"});
 			$(".menuCta").animate({"left": "72"},);
		}else{
			$(".menuCta").animate({"left": "-1000"});
			$(".contenair1").animate({"width":"10%"});
			$(".bouddha").animate({"margin-top":"41vh"});
			
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
	 	}else{
	 		$(".addSite").animate({"top":"-1000","left":"-1000"});
	 		$(".choixLogos").animate({"top":"-1000","left":"-1000"});
	 		$("#urlSiteBis").animate({"top":"-1000","left":"-1000"});
	 		$(".general").animate({"margin-top":"0","margin-left":"0"});
	 		$(".invisible").removeClass("hidde");
	 		$("#setUrl").removeClass("openUrl");
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

		

