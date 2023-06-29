//Seleccionamos los elementos por medio de dom
const btnAnterior = document.querySelector('#previous-image');
const btnSiguiente = document.querySelector('#next-image');
const divImage = document.querySelector('#imagen-carrusel');
//-----------------------------------------------------------

//Arreglo con las direcciones de las imágenes
const imagenes = [
    "img/imagen1.png",
    "img/imagen2.png",
    "img/imagen3.png"
]

//indice para la navegación en el arreglo
let indice = 0;



//Método que aplica la imágen en base al índice recibido
function aplicarIndice(indice) {
    divImage.style.backgroundImage = "url(" + imagenes[indice] + ")";
}

btnAnterior.addEventListener('click', function(){
    if (indice == 0) {
        alert("Ya has llegado al límite");
    }else{
        indice--;
        console.log(imagenes[indice]);
        aplicarIndice(indice);
    }
    
});

btnSiguiente.addEventListener('click', function(){
    if (indice == 2) {
        alert("Has llegado al límite máximo de los elementos");
    } else {
        indice++;
        console.log(imagenes[indice]);
        aplicarIndice(indice);
    }
    
});