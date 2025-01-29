//show menu

const nav = document.getElementById('nav-menu')
const closenav = document.getElementById('nav-close')
const toggle = document.getElementById('nav-toggle')

if (closenav) {
  closenav.addEventListener('click', () => {
    nav.classList.remove('show-menu')
  })
}
if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.add('show-menu')
  })
}
// remouve nav
const navLink = document.querySelectorAll('.nav__link')

const removeNav = () => {
  const nav = document.getElementById('nav-menu')
  nav.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', removeNav))

// blur nav
const brulNav = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50
    ? header.classList.add('blur-nav')
    : header.classList.remove('blur-nav')
}

window.addEventListener('scroll', brulNav)

// menu change

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 60,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      )
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)
// scroll reaveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal('.accueil__description, .popular__container, .footer,.visit__content')
sr.reveal('.accueil__img', {
  origin: 'top',
  distance: '100px',
  delay: 700,
  rotate: { z: -90 },
})
sr.reveal('.nouveau__card.un, .nouveau__card.trois, .boutique__card')
sr.reveal('.nouveau__card.deux', { origin: 'bottom' })
sr.reveal('.apropos__content', { origin: 'right' })
sr.reveal('.apropos__img', { origin: 'left' })
