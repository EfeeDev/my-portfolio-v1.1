// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 10)
//             $("nav ul li a").addClass("sticky");
//         else
//             $(".navbar").removeClass("sticky");
//     })});3550

const nav = document.getElementById('nav-bar');
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(screen.width <= 640){
        if(window.scrollY > 1500){
            //
            nav.classList.add('transparent');
            //
        } else{
            //
            nav.classList.remove('transparent');
            //
            }
    }
    if(screen.width >=768){
        if(window.scrollY > 3500){
            //
            nav.classList.add('transparent');
            //
        } else{
            //
            nav.classList.remove('transparent');
            //
            }
        }
    }
)