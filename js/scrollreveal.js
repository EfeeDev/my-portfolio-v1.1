const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1000,
    reset: true
})

sr.reveal('.imgmodel', {delay: 200})
sr.reveal('.text', {delay: 200})
sr.reveal('.skills_container', {delay:300, distance: '200px'})
sr.reveal('.info', {delay:400, interval:300})
sr.reveal('.block_competences', {distance: '200px', delay: 300, interval: 300})
sr.reveal('.project_title', {delay: 300})
sr.reveal('.projects', {delay: 300})
sr.reveal('.project_text', {delay: 300, interval:300})
sr.reveal('.project_text_2', {delay: 400, interval:300})
sr.reveal('.projects_skills', {distance: '0px', delay:600, interval:300})

/* Extension ScrollReveal, aide de l'API
delay = délai, le temps d'apparition du reveal
distance = la distance d'où il arrive, plus c'est grand plus l'effet aura de la profondeur
origin = d'où il apparaît, 'top' d'en haut, 'right' de droite etc
interval = interval d'apparition entre les éléments
duration = la duration de l'apparition, si ton duration equal 1000 il mettra 1 second à apparaître
*/



