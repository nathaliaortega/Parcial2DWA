import './scss/styles.scss'
import { createElement } from './js/utils'
const el = document.createElement('div')
const objAttr = { class: 'inn-container home' }

const children = [
  
  createElement('img', {
    class: 'home__img',
    id:'img',
    src: ''
  }),
  createElement('section', { class: 'home__buttons' }, [
    `<div id="v" clas="home__buttons-letter">V</div>`,
    `<div id="t" clas="home__buttons-letter">T</div>`,
    `<div id="r" clas="home__buttons-letter">R</div>`,
    `<div id="e" clas="home__buttons-letter">E</div>`,
    `<div id="w" clas="home__buttons-letter">W</div>`,
    `<div id="o" clas="home__buttons-letter">O</div>`,
    `<div id="l" clas="home__buttons-letter">L</div>`,
    `<div id="i" clas="home__buttons-letter">I</div>`
  ])
]

const app = createElement(el, objAttr, children)

console.log(app)

const root = document.getElementById('root')
root.appendChild(app)

// Calculate
const letterV = document.getElementById('v')
const letterT = document.getElementById('t')
const letterR = document.getElementById('r')
const letterE = document.getElementById('e')
const letterW = document.getElementById('w')
const letterO = document.getElementById('o')
const letterL = document.getElementById('l')
const letterI = document.getElementById('i')

const img = document.getElementById('img')



function showImage (src) {
 img.src=`./letters/${src}.png`;
}

letterV.addEventListener('click', e => {
  e.preventDefault()
  showImage("v")
})
letterT.addEventListener('click', e => {
  e.preventDefault()
  showImage("t")
})
letterR.addEventListener('click', e => {
  e.preventDefault()
  showImage("r")
})
letterE.addEventListener('click', e => {
  e.preventDefault()
  showImage("e")
})
letterW.addEventListener('click', e => {
  e.preventDefault()
  showImage("w")
})
letterO.addEventListener('click', e => {
  e.preventDefault()
  showImage("o")
})
letterL.addEventListener('click', e => {
  e.preventDefault()
  showImage("l")
})
letterL.addEventListener('click', e => {
  e.preventDefault()
  showImage("i")
})

