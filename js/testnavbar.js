// Ce fichier répertorie mes tests, peut importe le sujet
// je tiens à ce qu'on puisse voir mes diverses évolutions en js.

// Changement de navbar et de ses propriétés, elle n'était visuellement pas correcte je l'ai donc changée.
// voici l'ancien code : 
// let a = 0 ne sera défini nul part, il avait pour but de faire comme la div '#box' mais j'ai finalement utilisé un autre système. 
// Je sais que j'aurais pu marqué false mais 0 revient au même.
const nav = document.querySelector('nav');
const navA = document.querySelectorAll('#anavbar');
const hamb = document.getElementById('hamburger');
const logo = document.getElementById('imglogoid');
let a = 0;


function NavBarToggle(){
    navA.forEach((navAbar) => {
        if(a == 0){
            nav.style.width = '90%';
            navAbar.style.visibility = 'visible';
            hamb.style.opacity = '0';
            logo.style.display = 'none';
            setTimeout('visib()', 2000);
        }
    } 
)}


function visib(){
    navA.forEach((navAbar) => {
        if(a == 0){
            if(screen.width <= 640){
                nav.style.width = '90%';
                nav.style.margin = 'auto';
                navAbar.style.visibility = 'hidden';
                hamb.style.opacity = '1';
                setTimeout('navwidth', 2000);
            }
        }
    })
}

function navwidth(){
    if (a == 0){
        nav.style.width = 'auto';
    }
}


