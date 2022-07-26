const imagen = document.getElementById("uno");
let esP = true;
imagen.addEventListener("click",expandir);
function expandir(){
    if(esP){
        imagen.style.width = "50%";
        esP = false;
        return false;
    }
    imagen.style.width = "100%";
    esP = true;
}