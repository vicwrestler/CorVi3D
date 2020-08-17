const what = document.getElementById("whats");
what.addEventListener('mouseover', ()=>{
  what.style.color = "green";
});
what.addEventListener('mouseleave', () => {
  what.style.color = "black";
});