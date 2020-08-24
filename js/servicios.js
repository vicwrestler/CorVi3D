const servicio1 = document.getElementById("ser-im1");
const servicio2 = document.getElementById("ser-im2");
const servicio3 = document.getElementById("ser-im3");
const servicio4 = document.getElementById("ser-im4");
const servicio5 = document.getElementById("ser-im5");
const servicio6 = document.getElementById("ser-im6");
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");
const modal6 = document.getElementById("modal6");
servicio1.addEventListener("click", () => {
  modal1.classList.add("show");
});
servicio2.addEventListener("click", () => {
  modal2.classList.add("show");
});
servicio3.addEventListener("click", () => {
  modal3.classList.add("show");
});
servicio4.addEventListener("click", () => {
  modal4.classList.add("show");
});
servicio5.addEventListener("click", () => {
  modal5.classList.add("show");
});
servicio6.addEventListener("click", () => {
  modal6.classList.add("show");
});
//-----------------------------
document.addEventListener("click", (e) => {
  if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
    console.log(e);
    modal1.classList.remove("show");
    modal2.classList.remove("show");
    modal3.classList.remove("show");
    modal4.classList.remove("show");
    modal5.classList.remove("show");
    modal6.classList.remove("show");
  }
});