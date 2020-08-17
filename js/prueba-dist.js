const what = document.getElementById("whats");
const servicio1 = document.getElementById("ser-im1");
const modal1 = document.getElementById("modal1");
what.addEventListener('mouseover', () => {
  what.style.color = "green";
});
what.addEventListener('mouseleave', () => {
  what.style.color = "black";
});

servicio1.addEventListener("click", ()=>{
  modal1.classList.add("show");
})
