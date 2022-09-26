
// code of scrollreveals
window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 2000,
    origin: 'top',
});

sr.reveal('.dashboard .left-side', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});

sr.reveal('.dashboard .right-side', {
    duration: 1000,
    origin: 'top',
    distance: '300px'
});


sr.reveal('.service-h1, .project-h1, .contact-h1', {
    duration: 2000,
    origin: 'left',
    distance: '1100px',
    viewFactor: 0.2
});

sr.reveal('.contact .left-side', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.1
});

sr.reveal('.contact .right-side', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
    viewFactor: 0.1
});


// form validation
 const form = document.querySelector("form")
  
        form.addEventListener('submit', e => {
          if (!form.checkValidity()) {
            e.preventDefault()
          }
  
          form.classList.add('was-validated')
        })

// sr.reveal('.serviceTwo, .left-side', {
//     duration: 2000,
//     origin: 'left',
//     distance: '300px',
//     viewFactor: 0.2
// });

// sr.reveal('.serviceTwo .right-side', {
//     duration: 2000,
//     origin: 'right',
//     distance: '300px',
//     viewFactor: 0.2
// });

// sr.reveal('.serviceThree, .left-side', {
//     duration: 2000,
//     origin: 'left',
//     distance: '300px',
//     viewFactor: 0.2
// });

// sr.reveal('.serviceThree .right-side', {
//     duration: 2000,
//     origin: 'right',
//     distance: '300px',
//     viewFactor: 0.2
// });

// sr.reveal('.serviceFour, .left-side', {
//     duration: 2000,
//     origin: 'left',
//     distance: '300px',
//     viewFactor: 0.2
// });

// sr.reveal('.serviceFour .right-side', {
//     duration: 2000,
//     origin: 'right',
//     distance: '300px',
//     viewFactor: 0.2
// });
