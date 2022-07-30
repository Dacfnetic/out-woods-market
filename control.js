const imagen = document.getElementById("uno");
const clicker = document.getElementById("dos");
let esP = true;
let cerrada = true;
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
    cerrada = true;
}



imagen.addEventListener("click",expandir);
clicker.addEventListener("click",abrir);
function expandir(){
    if(esP){
        imagen.style.width = "50%";
        esP = false;
        return false;
    }
    imagen.style.width = "100%";
    esP = true;
}
function abrir(){
    if(cerrada){
        openPopup();
        cerrada = false;
        return false;
    }
    closePopup();
    cerrada = true;
}