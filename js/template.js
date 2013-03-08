sections = new Object();

section_visible=null;

$(document).ready(function() { /*precaricamento immagini background*/
    var imageList = ["images/info.jpg", "images/contacts.jpg"];
    preloadBackgroudImage(imageList);

    /*costruzione della struttura base della pagina con il gruppo centrale e il menu*/
    buildBaseStructure();
    buildPageSections();

    $('body').fadeIn('slow');
    
    var end_event = jQuery.Event("end");
    $(document).trigger(end_event);
})




function buildBaseStructure() { /*funzione che costruisce il div principale che fa da contenitore agli altri div*/

    var central_div = $("<div id='central' class='central effect2'></div>");
    var menu = $("<div id='menu' class='menu'></div>");

    var back_div = $("<div id='back' class='back'></div>");
    back_div.append(central_div);
    back_div.append(menu);

    $("body").append(back_div);
}

function preloadBackgroudImage(imageList) { /*metodo che precarica tutte le immagini di background della pagina*/
    for (var sectionId in sections) {
        if (sections[sectionId][1]) {
            var image = new Image();
            image.src = "images/sfondi_sezioni/" + sectionId + ".jpg";
        }
    }
}


function buildPageSections() {
/*  crea il menu e le sezioni centrali
    *   sections: dizionario dove la chiave è il nome della sezione e di elementi/sezioni da questi vengono creati menu_sezione (bottone del menu), image_sezione (sfondo della sezione, deve
    *   essere nella cartella images/sfondi_sezioni/nome_sezione), text_sezione
    */

    var menu = $("#menu")
    var central_div = $("#central")
    
    var first = true;
    for (var sectionId in sections) { 
        /*creazione del bottone del menu*/
        var menu_button = $("<div class='menu-button' id='menu_" + sectionId + "'></div>");
        menu_button.bind("click", function(){
                var sectionId = this.id.replace("menu_","");
                setMenuItemSelected(sectionId);
                showContent(sectionId);
            });
        var label_button = $("<span>" + capitalise(sectionId) + "</span>");
        menu.append(menu_button.append(label_button));
        
        /*contenitore che raggruppa tutto il contenuto di una sezione*/
        var content_of_section = $("<div id='"+sectionId+"' class='"+sectionId+"'></div>")

        /*creazione del div contenente l'immagine di sfondo centrale e dell'area contenente la spegazione della sezione*/
        if (sections[sectionId][1]) {
            back_image = $("<div id='back_" + sectionId + "' class='back-wall'></div>");
            back_image.css("background-image", "url('images/sfondi_sezioni/" + sectionId + ".jpg')");
            content_of_section.append(back_image);            
            
            var vertical_strip = $("<div id='strip_"+sectionId+"' class='vertical-strip' effect-my'></div>");
            var logo = $("<div class='logo'></div>")
            var text = $("<div id='text_"+sectionId+"' class='section-message'>"+sections[sectionId][0]+"</div>")
            vertical_strip.append(logo);
            vertical_strip.append(text);
            content_of_section.append(vertical_strip);
        }else{
            back = $("<div id='back_" + sectionId + "' class='back-wall'></div>");
            custom_content = $("<div id='content_"+sectionId+"' class='back-wall-"+sectionId+"'></div>")
            back.append(custom_content);
            content_of_section.append(back);            
        }
        
        /*selezione del primo elemento del menu*/
        if (first){
            content_of_section.css("display","block");
            menu_button.addClass("menu-button-selected");
            section_visible = sectionId
            first = false;
        }else{
            content_of_section.css("display","none");
        }
        
        central_div.append(content_of_section)
    }
}


function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function setMenuItemSelected(sectionId) {
    $(".menu-button-selected").removeClass("menu-button-selected");
    $("#menu_" + sectionId).addClass("menu-button-selected");
}


function showContent(sectionId) {
    if (section_visible)
        $("#"+section_visible).fadeOut("slow");
    $("#"+sectionId).fadeIn("slow");
    section_visible = sectionId;
}
