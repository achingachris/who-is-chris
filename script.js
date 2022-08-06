console.clear()
function typingEffect(element, speed) {
  let text = element.innerHTML
  element.innerHTML = ''
  let i = 0
  let timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i))
      i++
    } else {
      clearInterval(timer)
    }
  }, speed)
}

const paragraphToBeTypeWritten = document.querySelector('.text-typewriter')
typingEffect(paragraphToBeTypeWritten, 150)
