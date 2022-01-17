function obtenerMenuMeditacion(){
    const meditacionMenuu  = document.querySelector('.menuMeditacion');
    console.log(meditacionMenuu)
    meditacionMenuu.style.display = "flex";
}


const meditacionMenu  = document.querySelector('.menuMeditacion');
meditacionMenu.addEventListener("click", obtenerMenuMeditacion, false);

