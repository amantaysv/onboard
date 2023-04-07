const widgets = document.querySelectorAll('.reviews .widget')

for (const widget of widgets) {
  widget.addEventListener('click', () => {
    document.body.style = widget.getAttribute('style')
    clearActiveClasses()
    widget.classList.toggle('active')
  })
}

function clearActiveClasses() {
  widgets.forEach((widget) => widget.classList.remove('active'))
}
