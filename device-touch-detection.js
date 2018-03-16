export function detectTouchEvents() {

  // Listen for a mouse event and set class on body
  function listenForMouseEvent() {
    window.document.body.classList.add('no-touch')
    removeEventListeners()
  }

  // If touch event, remove listeners
  function listenForTouchEvent() {
    removeEventListeners()
  }

  // Remove both event listeners
  function removeEventListeners() {
    window.removeEventListener('mousemove', listenForMouseEvent)
    window.removeEventListener('touchstart', listenForTouchEvent)
  }

  // Listen for Event Listeners
  window.addEventListener('mousemove', listenForMouseEvent)
  window.addEventListener('touchstart', listenForTouchEvent)
}