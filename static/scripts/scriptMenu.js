

// Submenú Meditación
function coleccionMeditacion(e) {
    const cambioMeditacion = document.getElementsByClassName('listaMeditacion')[0];
    cambioMeditacion.style.display = 'block';
}
const clicMeditacionF = document.querySelector('.clicMeditacion');  
clicMeditacionF.addEventListener("click", coleccionMeditacion, false)


//Submenú Yoga
function coleccionYoga(e) {
    const cambioYoga = document.getElementsByClassName('listaYoga')[0];
    cambioYoga.style.display = 'block';
        
    if (cambioYoga.style.display = 'block'){
        cambioYoga.addEventListener("click", function pepe(e){
            cambioYoga.style.display = 'none';
        })
    }
}
const clicYogaF = document.querySelector('.clicYoga');  
clicYogaF.addEventListener("click", coleccionYoga, false)



// function pepe(e){
//     const cambioYoga = document.getElementsByClassName('listaYoga')[0];
//     cambioYoga.style.display = 'none';
//     const cambioMeditacion = document.getElementsByClassName('listaMeditacion')[0];
//     cambioMeditacion.style.display = 'none';
// }
// const clicBow = document.querySelector('.bannerHome');
// clicBow.addEventListener("click", pepe, false)