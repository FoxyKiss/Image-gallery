import { bmwList } from './utils/images.js'

//? Контейнер для слайдов
const slidesContainer = document.querySelector('.container')

//? Функция получения элемента через Template
function getTemplate() {
    const slidesTemplate = document.querySelector('.slides-template')
    const slideElement = slidesTemplate
        .content
        .querySelector('.slide')
        .cloneNode(true)
    return slideElement
}

//? Функция для отображения слайдов
function slidesPlugin(slidesList, title) {
    //? Изменяем главный заголовок
    const pageTitle = document.querySelector('.title').textContent = title
    //? Перебираем массив слайдов
    slidesList.map((slide) => {
        const slideElement = getTemplate()
        slideElement.style = `background-image: url(${slide.image});`
        slideElement.querySelector('.slide__title').textContent = slide.title
        //? Вешаем обработчики событий
        slideElement.addEventListener('click', () => {
            if (!slideElement.classList.contains('active')) {
                clearActiveClasses()
            }
            slideElement.classList.toggle('active')
        })
        //? Добавляем слайды в контейнер
        slidesContainer.append(slideElement)
    })

    //? Функция очищения классов у слайдов
    function clearActiveClasses() {
        const slides = document.querySelectorAll('.slide')
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(bmwList, 'BMW Cars Gallery')