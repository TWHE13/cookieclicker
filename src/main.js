import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
// ← ADD: import the auto-update helper
import { registerSW } from 'virtual:pwa-register'

// Register the service worker and enable auto-update
const updateServiceWorker = registerSW({
  onNeedRefresh() {
    // Called when a new SW is waiting: you could show a “New version available” toast here
    console.log('🆕 Update available — call updateServiceWorker() to apply')
  },
  onOfflineReady() {
    // Called when the app is cached and ready for offline use
    console.log('✅ App ready for offline use')
  }
})

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Cookie Clicker PWA</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
