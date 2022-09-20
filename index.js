function slidesPlugin(slideActive) {
    //? Массив слайдов
    const slides = document.querySelectorAll('.slide')
    //? Выбор активного слайда
    slides[slideActive].classList.add('active')
    //? Добавление обработчиков
        slides.forEach((slide) => {
        slide.addEventListener('click', (evt) => {
            if (!slide.classList.contains('active')) {
                clearActiveClasses()
            }

            slide.classList.toggle('active')
        })
    })
    //?  Удаление классов у слайдов
    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(0)