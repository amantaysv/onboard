const levelCards = document.querySelectorAll('.card.card-level')
const launchCards = document.querySelectorAll('.card.card-launch')
const featuresCards = document.querySelectorAll('.card.card-features')

const nextButton = document.querySelector('#next')
const tooltip = document.querySelector('#tooltip')

const progressBar = document.querySelector('#progressBar')

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
    // clearActiveFeaturesCardsClasses()
    card.classList.toggle('active')
    const choosenLength = Array.from(featuresCards)
      .map((el) => el.className)
      .filter((el) => el.includes('active')).length
    console.log('card.addEventListener ~ choosenLength:', choosenLength)

    const currentLength = Array.from(progressBar.querySelectorAll('div')).length
    console.log('card.addEventListener ~ currentLength:', currentLength)
    const numberOfSteps = 3 + choosenLength
    console.log('card.addEventListener ~ numberOfSteps:', numberOfSteps)

    if (currentLength < numberOfSteps) {
      const step = document.createElement('div')
      step.classList.add('step')
      progressBar.append(step)
    } else if (currentLength > numberOfSteps) {
      progressBar.removeChild(progressBar.lastChild)
    }
  })
}

nextButton.addEventListener('click', () => {
  const isOneChoosen = Array.from(featuresCards)
    .map((el) => el.className)
    .some((el) => el.includes('active'))

  if (isOneChoosen) {
    // ...
    console.log('asdasds')
  } else {
    tooltip.classList.add('active')
  }
})

function clearActiveLevelCardsClasses() {
  levelCards.forEach((levelCard) => levelCard.classList.remove('active'))
}

function clearActiveLaunchCardsClasses() {
  launchCards.forEach((launchCard) => launchCard.classList.remove('active'))
}

function clearActiveFeaturesCardsClasses() {
  featuresCards.forEach((featuresCard) => featuresCard.classList.remove('active'))
}
