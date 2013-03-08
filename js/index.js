// function animazioniFade(node){
//                $('.message div.visible, img.visible').fadeOut('slow', function(){
//                    $(this).removeClass('visible');
//                    $('img#'+node.id).removeClass('visible');

//                    $('.'+node.id).fadeIn('slow').addClass('visible');
//                    $('#'+node.id).fadeIn('slow', function(){
//                        if(node.id == 'contacts'){
//               $('.map').animate({
//                                width: '310px',
//                                marginLeft:'540px'
//                              }, 500, function(){
//                                 $('div .map iframe').fadeIn('slow')
//                             });
//                        }}
//                        ).addClass('visible');
//                });
// }            

// function caricaContenuti(node){
//  if (node.id == "galleria"){
//      $("#central_text").fadeOut('slow');
//      $("#gallery").fadeIn("slow");
//  }else if ($("#central_text").css("display") == "none"){
//      $("#central_text").fadeIn('slow');
//      $("#gallery").fadeOut("slow");
//  }


//  if($('.map').width() == '310'){
//      $('.map').animate({
//                        width: '0px',
//                        marginLeft:'850px'
//                     }, 500, function(){ 
//                      animazioniFade(node);
//                      $('div .map iframe').css('display','none')
//                  });
//  }else{
//      animazioniFade(node);
//  }
//  mostraCentral();
// }

// function mostraCentral() {
//  $('.invisible').removeClass('invisible').addClass('visible');
// }



/*
*
*
*
*/


/*nome_sezione=[html_text,url_background_image]    */

text_home = "La Locanda del Torrione sorge tra le mura più antiche della città di Manfredonia, in quelle che un tempo delimitavano la città Svevo-Angioina.<br>\
        Nasce con lo scopo di offrire ai suoi clienti un ambiente semplice e famigliare dove trascorrere pranzi, cene e feste: nel pomeriggio si possono gustare \
        sfiziosi aperitivi sulla terrazzina del locale, che nel periodo estivo viene allestita anche per altre ore della giornata, offrendo il servizio TV Sky HD. <br>\
        La cucina richiama le tipicità, i profumi e le tradizioni del Gargano: speriamo di incontrarvi presto per un gustoso incontro!"

text_proposte = "La Locanda del Torrione è aperta a pranzo e a cena: i piatti variano con la stagione ed in base alle proposte dello chef. \
                    Si offrono menù turistici con prezzi competitivi ma senza rinunciare alla qualità e alla genuinità dei prodotti tipici \
                    del Gargano: tra le nostre specialità troviamo gli antipasti di terra assortiti che raccolgono il meglio della tradizione locale. <br/>\
                    A 'La Locanda del Torrione' si organizzano feste, cerimonie, serate a tema, pranzi e cene di lavoro: lo staff è a completa disposizione \
                    del cliente per soddisfare tutte le sue esigenze e studiare menù per tutte le occasioni. <br/> \
                    Per ogni informazione sulle specialità, organizzazione di feste e prenotazioni, visita la scheda 'Contatti'."
                    
                    
text_contatti = "<b style='font-size:15px'>La Locanda <br /> del Torrione s.n.c. <br />\
                    di Bottalico Gianpio <br />\
                    e Triventi Matteo</b><br />\
                    Via delle Antiche Mura, 74/A<br />\
                    Manfredonia (FG)<br /><br />\
                    Per prenotazioni e informazioni si prega di contattare telefonicamente:<br />\
                    Gianpio : 349-5713372<br />\
                    Matteo : 340-4996077<br /><br />\
                    <center>Orari di apertura:<br/>\
                    10:00-15:30 / 17:30-01:00<br />\
                    (Lunedì chiuso)<br />"
                    
sections["home"] = [text_home,"images/sfondi_sezioni/home.jpg"];
sections["proposte"] = [text_proposte,"images/sfondi_sezioni/proposte.jpg"];
sections["galleria"] = [null,null];
sections["contatti"] = [text_contatti,"images/sfondi_sezioni/contatti.jpg"];


// $('#galleria').live("create",function() {
//    // perform selector on $(this) to apply class   
//    debugger;
// });


$(document).bind("end",function(){
    var galleria = $("#content_galleria");
    images = ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-1.jpg","image-2.jpg"];
    createImageSlot(galleria, images);
});


function setPrefixImage(pathImage){
    return "images/gallery/"+pathImage
}


function createImageSlot(container, images){
    for (i in images){
        var image = images[i];
        var thumb_src = "thumb-"+image;
        
        var slot = $("<div class='image-slot'></div>");
        image = setPrefixImage(image)
        var linked_image = $("<a href='"+image+"' rel='lightbox[custom]'  style='opacity:1'></a>")
        thumb_src = setPrefixImage(thumb_src)
        
        var thumb = $("<div class='container-thumb'></div>")
        thumb.css("background","url("+thumb_src+") no-repeat center center")
        
        linked_image.append(thumb)
        slot.append(linked_image)
        container.append(slot)
    }
}
