const levelCards = document.querySelectorAll('.card.card-level')
const launchCards = document.querySelectorAll('.card.card-launch')
const featuresCards = document.querySelectorAll('.card.card-features')

for (const card of levelCards) {
  card.addEventListener('click', () => {
    document.body.style = card.getAttribute('style')
    clearActiveLevelCardsClasses()
    card.classList.toggle('active')
  })
}

for (const card of launchCards) {
  card.addEventListener('click', () => {
    document.body.style = card.getAttribute('style')
    clearActiveLaunchCardsClasses()
    card.classList.toggle('active')
  })
}

for (const card of featuresCards) {
  card.addEventListener('click', () => {
    document.body.style = card.getAttribute('style')
    clearActiveFeaturesCardsClasses()
    card.classList.toggle('active')
  })
}

function clearActiveLevelCardsClasses() {
  levelCards.forEach((levelCard) => levelCard.classList.remove('active'))
}

function clearActiveLaunchCardsClasses() {
  launchCards.forEach((launchCard) => launchCard.classList.remove('active'))
}

function clearActiveFeaturesCardsClasses() {
  featuresCards.forEach((featuresCard) => featuresCard.classList.remove('active'))
}
