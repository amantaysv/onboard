let colorPicker
const defaultColor = '#0B1E47'

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
