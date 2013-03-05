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



$(document).ready(function(){				
	$('body').fadeIn('slow')   
	if (document.images){
		immagine1= new Image();
		immagine1.src="images/info.jpg";
		immagine1= new Image();
		immagine1.src="images/contacts.jpg";
	}
});
