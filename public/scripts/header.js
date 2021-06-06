const header = document.querySelector('header')
const hamburger = document.querySelector('.hamburger')
const menuBar = document.querySelector('.menu-bar')
const menuBarItems = document.querySelector('.menu-bar li a')
const menuVertical = document.querySelector('.menu')
const menuUl = document.querySelector('.menu__open')
const menuUlItems = document.querySelectorAll('.menu__open li a')
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    menuVertical.classList.toggle('hidden')

    if (hamburger.classList.contains('open')) { 
        menuVertical.classList.toggle('overlay') 
        menuVertical.classList.remove('has-fade')
        menuUl.classList.add('fade-in')
        body.style.overflow = 'hidden'

    } else {
        menuVertical.classList.toggle('overlay')
        menuVertical.classList.add('has-fade')
        menuUl.classList.remove('fade-in')
        body.style.removeProperty('overflow')
    }

})

const scroll = new SmoothScroll('ul a[href*="#"]', {
    speed: 800,
});


menuUlItems.forEach(
    (e) => {
        e.addEventListener('click', () => {
            new SmoothScroll(e.getAttribute('href'), {
                speed: 800
            })

            hamburger.classList.toggle('open')
            menuVertical.classList.toggle('hidden')
            menuVertical.classList.toggle('overlay')
            menuVertical.classList.add('has-fade')
            menuUl.classList.remove('fade-in')
            body.style.removeProperty('overflow')
            
        })
    }
)

var opac = (header.offsetHeight - scrollY)/header.offsetHeight

document.addEventListener('scroll', () => {
    let scrollPositionY = scrollY

    if (scrollPositionY >= header.offsetHeight) {
        header.style.opacity = 0.8
    } else {
        header.style.opacity = 1
    }
})

header.addEventListener('focus', () => {
    header.style.opacity = 1
})