import { createApp } from 'vue'
import App from './AppLesson1.vue'
import BaseIcon from './components/BaseIcon.vue'
import './assets/main.css'

const app = createApp(App)
app.component('BaseIcon', BaseIcon)
app.mount('#app')
