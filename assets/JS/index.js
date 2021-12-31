
function augmenter_zoom(){ 
    var image = document.getElementById("zoom"); 
    var hauteur = image.clientHeight; 
    image.style.height = (hauteur + 50) + "px"; 
} 

function diminuer_zoom()
{ 
    image = document.getElementById("zoom");
    var hauteur = image.clientHeight;
    image.style.height = (hauteur - 50) + "px";
} 