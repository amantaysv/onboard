let colorPicker
const defaultColor = '#0b1e47'

window.addEventListener('load', startup, false)
function startup() {
  colorPicker = document.querySelector('.wishlist #color-picker')
  colorPicker.value = defaultColor
  colorPicker.addEventListener('input', updateFirst, false)
  colorPicker.select()
}

function updateFirst(event) {
  const p = document.querySelector('.wishlist #color-picker-value')
  if (p) {
    p.textContent = event.target.value
  }
}
