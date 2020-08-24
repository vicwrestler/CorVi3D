/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */

const what = document.getElementById("whats");

const sec_nosotros = document.getElementById("nosotros");
const btn_nosotros = document.getElementById("btn-nosotros");
const sec_servicios = document.getElementById("servicios");
const btn_servicios = document.getElementById("btn-servicios");
const sec_productos = document.getElementById("productos");
const btn_productos = document.getElementById("btn-productos");
const sec_cotizacion = document.getElementById("cotizacion");
const btn_cotizacion = document.getElementById("btn-cotizacion");
const sec_contacto = document.getElementById("contacto");
const btn_contacto = document.getElementById("btn-contacto");
window.addEventListener("scroll", () => {
  if(pageYOffset<sec_nosotros.offsetTop){
    btn_nosotros.classList.remove("active");
  }
  if(pageYOffset >= sec_nosotros.offsetTop && pageYOffset < sec_servicios.offsetTop) {
    btn_nosotros.classList.add("active");
    btn_servicios.classList.remove("active");
  }
  if(pageYOffset >= (sec_servicios.offsetTop-10) && pageYOffset < sec_productos.offsetTop) {
    btn_servicios.classList.add("active");
    btn_nosotros.classList.remove("active");
    btn_productos.classList.remove("active");
  }
  if(pageYOffset >= (sec_productos.offsetTop-10) && pageYOffset < sec_cotizacion.offsetTop) {
    btn_productos.classList.add("active");
    btn_cotizacion.classList.remove("active");
    btn_servicios.classList.remove("active");
  }
  if(pageYOffset >= (sec_cotizacion.offsetTop-10) && pageYOffset < sec_contacto.offsetTop) {
    btn_cotizacion.classList.add("active");
    btn_productos.classList.remove("active");
    btn_contacto.classList.remove("active");
  }
  if(pageYOffset >= (sec_contacto.offsetTop-10)) {
    btn_contacto.classList.add("active");
    btn_cotizacion.classList.remove("active");
  }
});
//------------------------------------------------
what.addEventListener('mouseover', () => {
  what.style.color = "green";
});
what.addEventListener('mouseleave', () => {
  what.style.color = "black";
});


//--------------------------------