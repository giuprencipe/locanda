sections = new Object(); 


$(document).ready(function(){   
    /*precaricamento immagini background*/
    var imageList = ["images/info.jpg","images/contacts.jpg"];
    preloadBackgroudImage(imageList);
    
    /*costruzione della struttura base della pagina con il gruppo centrale e il menu*/
    buildBaseStructure();
    buildPageSections()

    $('body').fadeIn('slow');  
});




function buildBaseStructure(){
    /*funzione che costruisce il div principale che fa da contenitore agli altri div*/

    var central_div = $("<div id='central' class='central'></div>");
    var menu = $("<div id='menu' class='menu'></div>");

    var back_div = $("<div id='back' class='back'></div>");
    back_div.append(central_div);
    back_div.append(menu);

    $("body").append(back_div);
}

function preloadBackgroudImage(imageList){
    /*metodo che precarica tutte le immagini di background della pagina*/
    for (var section in sections){
        var image = new Image();
        image.src = "images/sfondi_sezioni/"+section+".jpg";
    }
}


function buildPageSections(){
    /*  crea il menu e le sezioni centrali
    *   sections: dizionario dove la chiave è il nome della sezione e di elementi/sezioni da questi vengono creati menu_sezione (bottone del menu), image_sezione (sfondo della sezione, deve
    *   essere nella cartella images/sfondi_sezioni/nome_sezione), text_sezione
    */
        
    var menu = $("#menu")
    var central_div = $("#central")
    for (var section in sections){
            /*creazione del bottone del menu*/
            var menu_button = $("<div class='menu-button' id='menu_"+section+"' onClick='caricaContenuti(this)'></div>");
            var label_button = $("<span>"+capitalise(section)+"</span>");
            menu.append(menu_button.append(label_button));
            
            /*creazione template centrale*/
            central_div.append("<div id='image_"+section+"' class='back-image'></div>")
            central_div.css("background-image","background-image: url('images/sfondi_sezioni/"+section+".jpg')");
    }
}


function capitalise(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
