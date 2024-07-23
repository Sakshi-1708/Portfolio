/*................Scroll Revel Animation.............*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/*...........Home..........*/
sr.reveal('.header-left',{delay:100})
sr.reveal('.header-right',{delay:100})
sr.reveal('.header-action-aria',{delay:200})
sr.reveal('.header-social',{delay:300})

/*...........About..........*/
sr.reveal('.heading-p',{interval:200})
sr.reveal('.heading',{interval:200})
/*...........projects.......*/
sr.reveal('.project',{interval:200})
/*........Scroll Reveal Left Right animation........*/
const srLeft=ScrollReveal({
    origin:'left',
    distance:'80px',
    duration:2000,
    reset: true
})

srLeft.reveal('.edu-box',{delay: 100})
srLeft.reveal('.experience-box',{delay: 100})
srLeft.reveal('.contact-container ',{delay: 100})