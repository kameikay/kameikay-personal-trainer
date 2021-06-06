const selectPlanosEspecializada = document.querySelector('#select-plano-especializada')
const valorEspecializada = document.querySelector('#valor-especializada')
const periodoEspecializada = document.querySelector('.periodo-especializada')

const selectPlanosOnline = document.querySelector('#select-plano-online')
const valorOnline = document.querySelector('#valor-online')
const periodoOnline = document.querySelector('.periodo-online')

const selectPlanosPresencial = document.querySelector('#select-plano-presencial')
const valorPresencial = document.querySelector('#valor-presencial')
const periodoPresencial = document.querySelector('.periodo-presencial')


selectPlanosEspecializada.addEventListener('change', () => {
    if (selectPlanosEspecializada.selectedIndex == 0) {
        valorEspecializada.textContent = '129,90'
        periodoEspecializada.textContent = 'MÊS'
    } else if (selectPlanosEspecializada.selectedIndex == 1) {
        valorEspecializada.textContent = '599,90' 
        periodoEspecializada.textContent = 'SEMESTRE'

    } else {
        valorEspecializada.textContent = '999,90'
        periodoEspecializada.textContent = 'ANO'

    }
})

selectPlanosOnline.addEventListener('change', () => {
    if (selectPlanosOnline.selectedIndex == 0) {
        valorOnline.textContent = '159,90'
        periodoOnline.textContent = 'MÊS'
    } else if (selectPlanosOnline.selectedIndex == 1) {
        valorOnline.textContent = '649,90' 
        periodoOnline.textContent = 'SEMESTRE'
    } else {
        valorOnline.textContent = '1049,90'
        periodoOnline.textContent = 'ANO'
    }
})

selectPlanosPresencial.addEventListener('change', () => {
    if (selectPlanosPresencial.selectedIndex == 0) {
        valorPresencial.textContent = '299,90'
        periodoPresencial.textContent = 'MÊS'
    } else if (selectPlanosPresencial.selectedIndex == 1) {
        valorPresencial.textContent = '1499,90' 
        periodoPresencial.textContent = 'SEMESTRE'
    } else {
        valorPresencial.textContent = '3199,90'
        periodoPresencial.textContent = 'ANO'
    }
})