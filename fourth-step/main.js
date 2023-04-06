let colorPicker
const defaultColor = '#0b1e47'

window.addEventListener('load', startup, false)
function startup() {
  colorPicker = document.querySelector('#color-picker')
  colorPicker.value = defaultColor
  colorPicker.addEventListener('input', updateFirst, false)
  colorPicker.select()
}

function updateFirst(event) {
  const p = document.querySelector('.color-input__color')
  if (p) {
    p.textContent = event.target.value
  }
}

const newActionModal = document.querySelector('.modal.modal-new-action')
const addNewAction = document.querySelector('.add-new-action')
const closeButtonNewActionModal = document.querySelector('.modal-new-action .button-close')
const closeNewActionModal = document.querySelector('.modal-new-action .close-icon')

addNewAction.addEventListener('click', () => {
  newActionModal.classList.add('active')
})

closeButtonNewActionModal.addEventListener('click', () => {
  newActionModal.classList.remove('active')
})

closeNewActionModal.addEventListener('click', () => {
  newActionModal.classList.remove('active')
})
