//Seleccionamos los elementos por medio de dom
const btnAnterior = document.querySelector('#previous-image');
const btnSiguiente = document.querySelector('#next-image');
const divImage = document.querySelector('#imagen-carrusel');
const divTituloCarrusel = document.querySelector('#titulo-carrusel');
const divEnlaceCarrusel = document.querySelector('#hipervinculo-carrusel');
//-----------------------------------------------------------

//Arreglo con las direcciones de las imágenes
const imagenes = [
    "img/imagen1.png_Prueba titulo_https://www.itssnp.edu.mx/index.php",
    "img/imagen2.png_Prueba titulo",
    "img/imagen3.png_Prueba titulo_https://www.itssnp.edu.mx/index.php"
]

//indice para la navegación en el arreglo
let indice = 0;

document.addEventListener("DOMContentLoaded", function(){
    cambiarConTiempo();
});

//Método que aplica la imágen en base al índice recibido
function aplicarIndice(indice) {
    let subDivision = imagenes[indice].split('_');
    let ligaImg = subDivision[0];
    let tituloImg = subDivision[1];
    let hipervinvulo = subDivision[2];
    console.log(`URL: ${ligaImg} Titulo de imagen: ${tituloImg} Hipervinculo: ${hipervinvulo}` );
    //Colocar titulo
    divTituloCarrusel.textContent = tituloImg;
    //Colocar hipervinculo si existe
    if (hipervinvulo != null) {
        divEnlaceCarrusel.style.display = "block";
        divEnlaceCarrusel.textContent = "Conoce más >"
        divEnlaceCarrusel.href = hipervinvulo
    }else{
        divEnlaceCarrusel.style.display = "none";
    }
    //Colocar imagen correspondiente
    divImage.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(" + ligaImg + ")";
}



function cambiarConTiempo(){
    setInterval( () => {

        console.log("Se ha entrado en el timeout");
        console.log(`Indice actual: ${indice} - Indice máximo: ${imagenes.length}`);

        if (indice == imagenes.length - 1) {

            console.log("Se ha alcanzado el máximo del arreglo");

            indice = 0;
            aplicarIndice(indice);
        }else{
            indice++;
            console.log(`Indice actual dentro del timeinterval ${indice} -> ${imagenes[indice]}`);
            aplicarIndice(indice);
        }
    } , 2000);
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
    console.log(`Indice actual dentro del listener siguiente ${indice}`);
    if (indice == imagenes.length - 1) {
        console.log("Has llegado al límite máximo de los elementos");
        indice = 0;
        aplicarIndice(indice);
    } else {
        indice++;
        console.log(imagenes[indice]);
        aplicarIndice(indice);
    }
    
});