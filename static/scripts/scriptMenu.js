function obtenerMenuMeditacion(){
    const medintacionMenuu  = document.getElementsByClassName('menuMeditacion');
    medintacionMenuu.style.display = "flex";
}


const meditacionMenu  = document.getElementsByClassName('menuMeditacion');
meditacionMenu.addEventListener("click", obtenerMenuMeditacion, false);

