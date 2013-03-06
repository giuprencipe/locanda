function animazioniFade(node){
               $('.message div.visible, img.visible').fadeOut('slow', function(){
                   $(this).removeClass('visible');
                   $('img#'+node.id).removeClass('visible');

                   $('.'+node.id).fadeIn('slow').addClass('visible');
                   $('#'+node.id).fadeIn('slow', function(){
                       if(node.id == 'contacts'){
				 $('.map').animate({
                               width: '310px',
                               marginLeft:'540px'
                             }, 500, function(){
                                $('div .map iframe').fadeIn('slow')
                            });
                       }}
                       ).addClass('visible');
               });
}			

function caricaContenuti(node){
	if (node.id == "galleria"){
		$("#central_text").fadeOut('slow');
		$("#gallery").fadeIn("slow");
	}else if ($("#central_text").css("display") == "none"){
		$("#central_text").fadeIn('slow');
		$("#gallery").fadeOut("slow");
	}


	if($('.map').width() == '310'){
		$('.map').animate({
                       width: '0px',
                       marginLeft:'850px'
                    }, 500, function(){ 
		 				animazioniFade(node);
		                $('div .map iframe').css('display','none')
		            });
	}else{
		animazioniFade(node);
	}
	mostraCentral();
}

function mostraCentral() {
	$('.invisible').removeClass('invisible').addClass('visible');
}



/*
*
*
*
*/


$(document).ready(function(){	
	/*precaricamento immagini background*/
	var imageList = ["images/info.jpg","images/contacts.jpg"];
	preloadBackgroudImage(imageList);
	
	/*costruzione della struttura base della pagina con il gruppo centrale e il menu*/
	buildBaseStructure();

	var sections = ["home","proposte","galleria","conatatti"]
	buildPageSection(sections)

	$('body').fadeIn('slow');  

});




function buildBaseStructure(){
	/*metodo che costruisce il div principale che fa da contenitore agli altri div*/

	var central_div = $("<div id='central' class='central'></div>");
	var menu = $("<div id='menu' class='menu'></div>");

	var back_div = $("<div id='back' class='back'></div>");
	back_div.append(central_div);
	back_div.append(menu);

	$("body").append(back_div);
}

function preloadBackgroudImage(imageList){
	/*metodo che precarica tutte le immagini di background della pagina*/
	if (document.images){
		immagine1= new Image();
		immagine1.src="images/home.jpg";
		immagine2= new Image();
		immagine2.src="images/contacts.jpg";
		immagine3= new Image();
		immagine3.src="images/menu.jpg";
	}
}


function buildPageSection(sections){
	var menu = $("#menu")
	var central_div = $("#central")
	for (var i=0;i<sections.length;i++){
			var menu_button = $("<div class='menu-button' id='"+sections[i]+"' onClick='caricaContenuti(this)'></div>");
			var label_button = $("<span>"+capitalise(sections[i])+"</span>")
			menu.append(menu_button.append(label_button));
	}
}


function capitalise(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
