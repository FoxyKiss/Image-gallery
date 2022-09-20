const slides = document.querySelectorAll('.slide')


slides.forEach((slide) => {
    slide.addEventListener('click', (evt) => {
    if(!slide.classList.contains('active')) {
        clearActiveClasses()
    }

     slide.classList.toggle('active')
    })
})

function clearActiveClasses () {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}