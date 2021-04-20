const showNavBar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    body_nav = document.getElementById(bodyId),
    header_nav = document.getElementById(headerId)

    if(toggle && nav && body_nav && header_nav){
        toggle.addEventListener('click', ()=>{
            //
            nav.classList.toggle('show')
            //
            toggle.classList.toggle('fa-times')
            //
            body_nav.classList.toggle('body_nav')
            //
            header_nav.classList.toggle('body_nav')
        }
    )}
}

showNavBar('header-toggle', 'nav-bar', 'body_nav', 'header_nav')

const linkColor = document.querySelectorAll('.nav_link');

function colorLink(){
    if(linkColor){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))