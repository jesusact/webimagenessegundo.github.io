document.addEventListener("DOMContentLoaded", function () { 

let imagenes = document.getElementsByClassName('imagen');

for(let imagen of imagenes){

    imagen.addEventListener("mouseover", function(){
        imagen.setAttribute('class','transparencia');

    });

    imagen.addEventListener("mouseout", function(){
        imagen.setAttribute('class','transparencia0');
    })

}


});