<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Componentes do site
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import LePortugais from './components/LePortugais.vue'
import PrestationsSection from './components/PrestationsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

const scrollToSection = () => {
  const map = {
    '/': '#accueil',
    '/portugais': '#le-portugais',
    '/prestations': '#prestations',
    '/contact': '#contact'
  }

  const selector = map[route.path]
  if (selector) {
    setTimeout(() => {
      const el = document.querySelector(selector)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // tempo para o DOM garantir renderização
  }
}

onMounted(() => {
  AOS.init({
    once: false,
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out'
  })

  scrollToSection()
})

watch(route, () => {
  scrollToSection()
})
</script>

<template>
  <Header />
  <HeroSection />
  <LePortugais />
  <PrestationsSection />
  <ContactSection />
  <Footer />
</template>

<style>
/* opcional: scroll-behavior para âncoras internas */
html {
  scroll-behavior: smooth;
}
</style>
