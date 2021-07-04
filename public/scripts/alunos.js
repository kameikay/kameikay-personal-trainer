const carousel = document.querySelector('.alunos__carousel')
const arrowLeft = document.querySelector('.arrow__left')
const arrowRight = document.querySelector('.arrow__right')
const alunosCards = document.querySelectorAll('.aluno__card')
const alunoCard = document.querySelector('.aluno__card')
const aluno = document.querySelector('.aluno')

let positionIndex = 0

function carouselFunction(arrow) {
    positionIndex ++

    if (positionIndex > alunosCards.length - 1) {
        positionIndex = 0
        alunosCards[0].classList.remove('opacity')
        alunosCards[alunosCards.length - 1].classList.toggle('opacity')
    }

    if (arrow === 'left') {
        aluno.style.transform = `translateX(${positionIndex * alunoCard.offsetWidth}px)`
        alunosCards[positionIndex - 1].classList.toggle('opacity')
        alunosCards[positionIndex].classList.toggle('opacity')
    }
    if (arrow === 'right') {
        aluno.style.transform = `translateX(${-positionIndex * alunoCard.offsetWidth}px)`
        alunosCards[positionIndex - 1].classList.toggle('opacity')
        alunosCards[positionIndex].classList.toggle('opacity')

    }
}

arrowLeft.addEventListener('click', () => {
    carouselFuction('left')
})

arrowRight.addEventListener('click', () => {
    carouselFunction('right')
})