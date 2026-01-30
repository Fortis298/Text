let height = window.innerHeight
const text = document.querySelector('.text')
const words = document.querySelector('.words p')
const symbols = document.querySelector('.symbols p')
const noSpaces = document.querySelector('.no-spaces p')
const sentences = document.querySelector('.sentences p')


text.addEventListener('input', () => {
  if (text.value != '') {
    words.textContent = text.value.split(" ").length
    symbols.textContent = text.value.length
    noSpaces.textContent = text.value.replace(/\s+/g, '').length
    
    if (text.value[text.value.length - 1] == '.') {
      newText = text.value.replace(/\s+/g, '')
      sentences.textContent = newText.split(/[.!?]+/).filter(Boolean).length
    } else {
      newText = text.value.replace(/\s+/g, '') + '.'
      sentences.textContent = newText.split(/[.!?]+/).filter(Boolean).length;
    }
  } 
  else {
    words.textContent = '...'
    symbols.textContent = '...'
    noSpaces.textContent = '...'
    sentences.textContent = '...'
  }
})

document.body.style.height = height + 'px'

