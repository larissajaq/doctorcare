// adicionar evento e função fora do html, assim que abrir a pg para evitar erro no console
window.addEventListener('scroll', onScroll)

onScroll()

// código limpo --> cada função com apenas uma funcionalidade
// gerenciar scrolls da pagina
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //viewport/2 (meio da tela) + o quando deslocou (deu scroll) na página
  const targetLine = scrollY + innerHeight / 2

  //inicio da seção
  const sectionTop = section.offsetTop
  //altura da seção
  const sectionHeight = section.offsetHeight

  //verificar se

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop

  // console.log('O topo da seção chegou ou passou da linha?', sectioTopReachedOrPassedTargetLine)

  //verificar se a base esta abaixo da linha alvo
  //quais dados vou precisar?

  //fim da seção
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries =
    sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine

  // console.log('Dentro do limite da seção?', sectionBoundaries)

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .numbers-box, 
#services, 
#services header, 
#services .card, 
#about, 
#about header, 
#about .content, 
#contact, 
#contact header, 
#contact .content`)
