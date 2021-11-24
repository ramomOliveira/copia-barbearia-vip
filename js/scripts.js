let barraFixa = document.getElementById('barra-fixa');

function ScroolListner (e) {
    let altura = window.scrollY;
    if (altura >= 200) {
        barraFixa.style.marginTop = 0;
    } else {
        barraFixa.style.marginTop = "-68px";
    }
}

document.addEventListener('scroll', ScroolListner);