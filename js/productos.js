const img_max = document.getElementById('expandimg');
const text = document.getElementById('imgtext');
const cinta = document.getElementsByClassName('imgs_min')[0];
cinta.addEventListener('click', (e) => {
    if(e.target.src!=undefined){
        img_max.src = e.target.src;
        text.innerHTML = e.target.alt;
    }
});