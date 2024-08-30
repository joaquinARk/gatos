const boton = document.getElementById("boton");
const menuMenu = document.getElementById("menuMenu");

boton.addEventListener("click", function(event){
event.preventDefault();
menuMenu.classList.toggle("mostrar");
});

window.addEventListener("click", function(event) {
if (!event.target.matches("#boton")) {
    menuMenu.classList.remove("mostrar");
}
});
