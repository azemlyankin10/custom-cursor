const root = document.querySelector('html')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

// Following extra cursor element
const follower = document.createElement('div')
follower.classList.add('cursor', 'cursor__follower')
root.appendChild(follower)

// Following extra cursor element 2
const secondFollower = document.createElement('div')
secondFollower.classList.add('cursor', 'cursor__follower-second')
root.appendChild(secondFollower)


root.addEventListener('mousemove', (e) => {
  setPosition(follower, e)
  setPosition(secondFollower, e)
  setPosition(cursor, e)
})

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}