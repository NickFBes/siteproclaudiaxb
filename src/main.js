import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createI18n } from 'vue-i18n'
import { MotionPlugin } from '@vueuse/motion'
import './assets/main.css';



const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'pt',
  messages: {
    fr: {},
    pt: {}
  }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(MotionPlugin)
app.mount('#app')

AOS.init()
