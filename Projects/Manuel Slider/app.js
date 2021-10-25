const container = document.querySelector('.container')
const right = document.querySelector('.right')
const left = document.querySelector('.left')
const upBtn = document.querySelector('.upBtn')
const downBtn = document.querySelector('.downBtn')
const slidesLength = right.querySelectorAll('div').length

let activeSlideIndex = 0

left.style.top = `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = container.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    right.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    left.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}